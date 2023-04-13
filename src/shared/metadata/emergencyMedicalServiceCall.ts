import ModelMetadata from '../ModelMetadata';

export default new ModelMetadata({ modelName: 'EmergencyMedicalServiceCall',
	fields: [
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
//			defaultValue: '',
		},
		{
			name: 'startDateTimeLocal',
			type: 'date',
			allowNull: false,
		},
	]
});
