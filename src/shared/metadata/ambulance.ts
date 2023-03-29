import ModelMetadata from '../ModelMetadata';

const fields = [
  {
    name: 'id',
    colName: 'ambulance_uuid',
    type: 'uuid',
    primaryKey: true,
    autoIncrement: true,
  },
  {
    name: 'OrganizationId',
    colName: 'emsorganization_uuid',
    type: 'uuid',
  },
  {
    name: 'ambulanceIdentifier',
    type: 'string',
    unique: true,
    allowNull: false,
    required: true,
    defaultValue: '',
  },
  {
    name: 'isActive',
    colName: 'activeindicator',
    type: 'boolean',
    allowNull: false,
    defaultValue: true,
  },
];

export default new ModelMetadata({ modelName: 'Ambulance', fields });
