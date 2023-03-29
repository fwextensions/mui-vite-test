const DeliveryStatus = {
  RINGDOWN_SENT: 'RINGDOWN SENT',
  RINGDOWN_RECEIVED: 'RINGDOWN RECEIVED',
  RINGDOWN_CONFIRMED: 'RINGDOWN CONFIRMED',
  ARRIVED: 'ARRIVED',
  OFFLOADED: 'OFFLOADED',
  OFFLOADED_ACKNOWLEDGED: 'OFFLOADED ACKNOWLEDGED',
  RETURNED_TO_SERVICE: 'RETURNED TO SERVICE',
  CANCELLED: 'CANCELLED',
  CANCEL_ACKNOWLEDGED: 'CANCEL ACKNOWLEDGED',
  REDIRECTED: 'REDIRECTED',
  REDIRECT_ACKNOWLEDGED: 'REDIRECT ACKNOWLEDGED',
};

DeliveryStatus.ALL_STATUSES = Object.values(DeliveryStatus);

DeliveryStatus.is = (status: keyof typeof DeliveryStatus, target: keyof typeof DeliveryStatus) => DeliveryStatus.ALL_STATUSES.indexOf(status) >= DeliveryStatus.ALL_STATUSES.indexOf(target);

export default Object.freeze(DeliveryStatus);
