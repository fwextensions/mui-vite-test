import FieldMetadata, { Field } from "./FieldMetadata";

const identity = (field: FieldMetadata) => field;
const keyValue = (field: FieldMetadata): [string, Field] => [field.name, field];
const all = () => true;

const createdUpdatedFields: Field[] = [
  {
    name: 'createdAt',
    colName: 'recordcreatetimestamp',
    type: 'date',
  },
  {
    name: 'CreatedById',
    colName: 'recordcreateuser_uuid',
    type: 'uuid',
  },
  {
    name: 'updatedAt',
    colName: 'recordupdatetimestamp',
    type: 'date',
  },
  {
    name: 'UpdatedById',
    colName: 'recordupdateuser_uuid',
    type: 'uuid',
  },
];

interface ModelMetadataProps {
	modelName: string,
	tableName: string,
	fields: Field[]
}

export default class ModelMetadata {
	private modelName: string;
	private tableName: string;
	private fields: Readonly<FieldMetadata[]>;
	private params: Readonly<FieldMetadata[]>;

  constructor({ modelName, tableName = modelName.toLowerCase(), fields }: ModelMetadataProps) {
    this.modelName = modelName;
    this.tableName = tableName;
    // append the standard created and updated fields to all models
    this.fields = Object.freeze([...fields, ...createdUpdatedFields].map((field) => new FieldMetadata(field)));
    this.params = Object.freeze(
      this.getFields(
        ({ name }) => name,
        ({ isParam }) => isParam
      )
    );
  }

  getFields(convertField = identity, filter = all) {
    return this.fields.filter(filter).map(convertField);
  }

  getFieldHash(filter = all) {
    return Object.fromEntries(this.fields.filter(filter).map(keyValue));
  }

  getParams() {
    return this.params;
  }

//  getObjectFields() {
//    return this.getFields(undefined, ({ type, isParam }) => isParam || type === 'enum');
//  }
}
