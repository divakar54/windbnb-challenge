export const filterByLocation = (location) => {
	return {
		type: "FILTER_BY_LOCATION",
		payload: location,
	};
};
export const filterByGuest = (numberOfGuests) => {
	return {
		type: "FILTER_BY_GUEST",
		payload: numberOfGuests,
	};
};
export const filterByLocationAndGuest = (location, numberOfGuests) => {
	return {
		type: "FILTER_BY_LOCATION_AND_GUEST",
		payload: {
			location,
			numberOfGuests,
		},
	};
};
