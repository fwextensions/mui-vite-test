import ModelMetadata from '../ModelMetadata';

export default new ModelMetadata({
	modelName: 'EmergencyMedicalServiceCallAmbulance',
	fields: [
		{
			name: 'id',
			colName: 'emergencymedicalservicecallambulance_uuid',
			type: 'uuid',
			primaryKey: true,
			autoIncrement: true,
		},
		{
			name: 'EmergencyMedicalServiceCallId',
			colName: 'emergencymedicalservicecall_uuid',
			type: 'uuid',
		},
		{
			name: 'AmbulanceId',
			colName: 'ambulance_uuid',
			type: 'uuid',
		},
		{
			name: 'startDateTimeLocal',
			type: 'date',
			allowNull: false,
		},
	]
});
