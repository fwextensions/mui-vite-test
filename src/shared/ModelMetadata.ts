import FieldMetadata, { Field } from "./FieldMetadata";

type FieldConverter = (field: FieldMetadata) => any;
type FieldFilter = (field: FieldMetadata) => boolean;

const identity: FieldConverter = (field: FieldMetadata) => field;
const nameToField: FieldConverter = (field: FieldMetadata): [string, FieldMetadata] => [field.name, field];
const all: FieldFilter = () => true;

const createdUpdatedFields: Field[] = [
	{
		name: "createdAt",
		colName: "recordcreatetimestamp",
		type: "date",
	},
	{
		name: "CreatedById",
		colName: "recordcreateuser_uuid",
		type: "uuid",
	},
	{
		name: "updatedAt",
		colName: "recordupdatetimestamp",
		type: "date",
	},
	{
		name: "UpdatedById",
		colName: "recordupdateuser_uuid",
		type: "uuid",
	},
];

interface ModelMetadataProps {
	modelName: string,
	tableName?: string,
	fields: Field[]
}

export default class ModelMetadata {
	private modelName: string;
	private tableName: string;
	private readonly fields: Readonly<FieldMetadata[]>;
	private readonly params: Readonly<Field["name"][]>;

	constructor({ modelName, tableName = modelName.toLowerCase(), fields }: ModelMetadataProps) {
		this.modelName = modelName;
		this.tableName = tableName;
		// append the standard created and updated fields to all models
		this.fields = Object.freeze([...fields, ...createdUpdatedFields].map(
			(field) => new FieldMetadata(field)));
		this.params = Object.freeze(
			this.getFields(
				({ name }) => name,
				({ isParam }: FieldMetadata) => isParam,
			),
		);
	}

	getFields(convertField = identity, filter = all): any[] {
		return this.fields.filter(filter).map(convertField);
	}

	getFieldHash(filter = all) {
		return Object.fromEntries(this.fields.filter(filter).map(nameToField));
	}

	getParams() {
		return this.params;
	}

	getObjectFields() {
		return this.getFields(undefined, ({ type, isParam }) => isParam || type === "enum");
	}
}
