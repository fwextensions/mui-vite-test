import ModelMetadata from '@/shared/ModelMetadata';

export default new ModelMetadata({
	modelName: 'Ambulance',
	fields: [
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
	]
});
