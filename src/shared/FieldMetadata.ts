type BaseField<T> = {
	name: string,
	colName: string,
	value?: T,
	defaultValue?: T,
	label?: string,
	shortLabel?: string,
	range?: {
		min: number,
		max: number
	},
	unique?: boolean,
	primaryKey?: boolean,
	allowNull?: boolean,
	autoIncrement?: boolean,
};
type IntegerField = BaseField<number> & {
	type: "integer",
};
type DecimalField = BaseField<number> & {
	type: "decimal",
};
type BooleanField = BaseField<boolean> & {
	type: "boolean",
	defaultValue: boolean | null,
};
type EnumField = BaseField<string> & {
	type: "enum",
	typeArgs: string[],
};
type DateField = BaseField<string> & {
	type: "date",
};
type UUIDField = BaseField<string> & {
	type: "uuid",
};
type TextField = BaseField<string> & {
	type: "text",
};
type StringField = BaseField<string> & {
	type: "string",
};
type VirtualField = BaseField<string> & {
	type: "virtual",
	typeArgs: string[],
	get?: () => string,
	validate?: object,
};
type CITextField = BaseField<string> & {
	type: "citext",
	unique?: object,
	validate?: object,
};
type JSONBField = BaseField<string> & {
	type: "jsonb",
};
export type Field = IntegerField
	| DecimalField
	| BooleanField
	| EnumField
	| DateField
	| UUIDField
	| TextField
	| StringField
	| VirtualField
	| CITextField
	| JSONBField;

const Suffixes = {
  uuid: '_uuid',
  enum: 'enum',
};
const NonParamTypes = ['uuid', 'date'];
const UUIDPattern = /[-a-f0-9]+/i;
const BooleanPattern = /^true|false$/i;

function createColName(field: Field) {
	const { name, type } = field;

  return name.toLowerCase() + (Suffixes[type] || '');
}
//function createColName({ name, type }: { name: string, type: string }) {
//  return name.toLowerCase() + (Suffixes[type] || '');
//}

export default class FieldMetadata {
	public colName: string = "";
	public isParam: boolean = false;
	public defaultValue: any;

  constructor(field: Field) {
    Object.assign(
      this,
      // assign these default values first so the field can override them below
      {
        colName: createColName(field),
        isParam: !NonParamTypes.includes(field.type),
        defaultValue: field.defaultValue ?? false
//        defaultValue: field.defaultValue ?? field.type === 'boolean' ? false : null,
      },
      field
    );
  }

  parseValueFromString(string: string) {
    let value;

    switch (this.type) {
      case 'uuid':
        value = UUIDPattern.test(string) ? string : undefined;
        break;

      case 'integer':
        value = Number(string);
        value = Number.isInteger(value) ? value : undefined;
        break;

      case 'decimal':
        value = Number(string);
        value = Number.isFinite(value) ? value : undefined;
        break;

      case 'boolean':
        value = BooleanPattern.test(string) ? Boolean(string) : undefined;
        break;

      case 'enum':
        value = this.typeArgs.includes(string) ? string : undefined;
        break;

      case 'text':
      case 'string':
        value = string;
        break;

      default:
        value = undefined;
        break;
    }

    return value;
  }

  toString() {
    return `FieldMetadata: ${this.name}`;
  }

  get [Symbol.toStringTag]() {
    return this.toString();
  }
}
