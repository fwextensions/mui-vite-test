const ALL_STATUSES = [
	"RINGDOWN SENT",
	"RINGDOWN RECEIVED",
	"RINGDOWN CONFIRMED",
	"ARRIVED",
	"OFFLOADED",
	"OFFLOADED ACKNOWLEDGED",
	"RETURNED TO SERVICE",
	"CANCELLED",
	"CANCEL ACKNOWLEDGED",
	"REDIRECTED",
	"REDIRECT ACKNOWLEDGED"
] as const;

type Status = (typeof ALL_STATUSES)[number];

type S = {
	[K in Status]: K
};

const is = (status: Status, target: Status) => ALL_STATUSES.indexOf(status) >= ALL_STATUSES.indexOf(target);

const DeliveryStatus = ALL_STATUSES.reduce((result, status) => ({
		...result,
		[status.replaceAll(" ", "_")]: status
	}), { ALL_STATUSES, is });

export default Object.freeze(DeliveryStatus);
