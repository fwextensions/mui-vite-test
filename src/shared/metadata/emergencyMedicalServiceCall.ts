import ModelMetadata from '../ModelMetadata';

const fields = [
  {
    name: 'id',
    colName: 'emergencymedicalservicecall_uuid',
    type: 'uuid',
    primaryKey: true,
    autoIncrement: true,
  },
  {
    name: 'dispatchCallNumber',
    type: 'integer',
    allowNull: false,
    required: true,
    defaultValue: '',
  },
  {
    name: 'startDateTimeLocal',
    type: 'date',
    allowNull: false,
  },
];

export default new ModelMetadata({ modelName: 'EmergencyMedicalServiceCall', fields });
