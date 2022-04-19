import React, { useState } from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import FlexContainer from "../../containers/FlexContainer/FlexContainer";
import { useDispatch } from "react-redux";
import {
	filterByGuest,
	filterByLocation,
	filterByLocationAndGuest,
} from "../../redux/actions/filterActions";

const Wrapper = styled.div`
	position: relative;
	padding: 1em;
	border-radius: 20px;
	box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
	min-width: 25%;
	max-width: 55%;
	cursor: pointer;
`;

const FilterOptions = () => {
	const [location, setLocation] = useState("");
	const [guest, setGuest] = useState("");
	const dispatch = useDispatch();

	const handleOnClick = (event) => {
		if (location && guest) {
			dispatch(filterByLocationAndGuest(location, guest));
		} else if (location) {
			dispatch(filterByLocation(location));
		} else {
			dispatch(filterByGuest(guest));
		}
	};
	// will call useDispatch hook from here, passing in a specified action which would be available in the reducer
	// then the store can return the modified state in the component that we need using useSelect
	return (
		<Wrapper>
			<FlexContainer justifyItems="space-between" alignItems="center">
				<input
					onChange={(event) => setLocation(event.target.value)}
					value={location}
					placeholder="Location..."
				/>

				<input
					type="number"
					onChange={(event) => setGuest(event.target.value)}
					value={guest}
					placeholder="Guests..."
				/>

				<Icon
					path={mdiMagnify}
					title="User Profile"
					size={1.5}
					color="red"
					onClick={(event) => handleOnClick(event)}
				/>
			</FlexContainer>
		</Wrapper>
	);
};

export default FilterOptions;
