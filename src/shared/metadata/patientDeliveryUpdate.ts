import ModelMetadata from '@/shared/ModelMetadata';
import { DeliveryStatus } from '../constants';

export default new ModelMetadata({
	modelName: 'PatientDeliveryUpdate',
	fields: [
		{
			name: 'id',
			colName: 'patientdeliveryupdate_uuid',
			type: 'uuid',
			primaryKey: true,
			autoIncrement: true,
		},
		{
			name: 'PatientDeliveryId',
			colName: 'patientdelivery_uuid',
			type: 'uuid',
			allowNull: false,
		},
		{
			name: 'deliveryStatus',
			type: 'enum',
			typeArgs: DeliveryStatus.ALL_STATUSES,
			allowNull: false,
		},
		{
			name: 'deliveryStatusDateTimeLocal',
			type: 'date',
		},
	]
});
