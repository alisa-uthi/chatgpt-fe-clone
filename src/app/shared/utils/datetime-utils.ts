import * as dayjs from "dayjs";

export const CREATED_PERIOD = {
	TODAY: {
		TITLE: 'Today',
		SORT_ORDER: 1
	},
	YESTERDAY: {
		TITLE: 'Yesterday',
		SORT_ORDER: 2
	},
	LAST_WEEK: {
		TITLE: 'Previous 7 Days',
		SORT_ORDER: 3
	},
	MORE_THAN_A_WEEK: {
		TITLE: 'Previous 30 Days',
		SORT_ORDER: 4
	}
}

export function getMockCreatedDate(created?: string): Date {
	let today = dayjs();

	switch (created?.toUpperCase()) {
		case 'TODAY':
			return today.toDate();
		case 'YESTERDAY':
			return today.subtract(1, 'day').toDate();
		case 'LAST_WEEK':
			return today.subtract(1, 'week').toDate();
		default:
			// For "Previous 30 Days" section
			return today.subtract(30, 'day').toDate();
	}
}

export function getDisplayedCreatedPeriod(date: Date): string {
	const createdDate = dayjs(date);
	const today = dayjs();

	if (createdDate.diff(today, 'day') == 0) {
		return CREATED_PERIOD.TODAY.TITLE;
	} else if (createdDate.diff(today.subtract(1, 'day'), 'day') == 0) {
		return CREATED_PERIOD.YESTERDAY.TITLE;
	} else if (createdDate.diff(today.subtract(7, 'day'), 'day') >= -7) {
		return CREATED_PERIOD.LAST_WEEK.TITLE;
	} else {
		return CREATED_PERIOD.MORE_THAN_A_WEEK.TITLE;
	}
}