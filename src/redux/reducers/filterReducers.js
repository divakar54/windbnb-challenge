import stay from "../../assets/stays.json";

const initialState = {
	stay: stay,
};

const locationFilter = (city, { stay: hotelList }) =>
	hotelList.filter((hotel) => hotel.city.toLowerCase() === city.toLowerCase());

const guestFilter = (numberOfGuests, { stay: hotelList }) =>
	hotelList.filter((hotel) => hotel.maxGuests >= numberOfGuests);

const locationGuestFilter = ({ location, numberOfGuests }, { stay: hotelList }) => {
	console.log("hotelList", hotelList);
	return hotelList.filter(
		(hotel) =>
			hotel.city.toLowerCase() === location.toLowerCase() &&
			hotel.maxGuests >= Number(numberOfGuests)
	);
};

export const filterReducer = (state = initialState, { type, payload }) => {
	console.log("payload ->", payload);
	console.log("state", state);
	switch (type) {
		case "FILTER_BY_LOCATION":
			return {
				...state,
				stay: locationFilter(payload, initialState),
			};
		case "FILTER_BY_GUEST":
			return {
				...state,
				stay: guestFilter(payload, initialState),
			};
		case "FILTER_BY_LOCATION_AND_GUEST":
			return {
				...state,
				stay: locationGuestFilter(payload, initialState),
			};
		default:
			return state;
	}
};
