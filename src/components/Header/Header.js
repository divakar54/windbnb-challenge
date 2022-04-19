import React, { useState } from "react";
import FlexContainer from "../../containers/FlexContainer/FlexContainer.js";
import Logo from "../Logo/Logo";
import FilterOptions from "../FilterOptions/FilterOptions.js";
import styles from "./Header.module.css";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import styled from "styled-components";
import { mdiMapMarker } from "@mdi/js";

const cities = ["Helsinki, Finland", "Turku, Finland", "Oulu, Finland", "Vaasa, Finland"];

const Button = styled.button`
	padding: 1em;
	display: flex;
	align-items: center;
	border-width: 0;
	border-radius: 16px;
	background: #eb5757;
	color: white;
	font-family: "Montserrat", sans-serif;
`;

const Input = styled.input`
	padding: 1em;
	border-width: 0;
	border-radius: 16px;
	background-color: aliceblue;
`;

const ButtonOption = styled.button`
	display: flex;
	align-items: center;
	color: #4f4f4f;
`;

const Wrapper = styled.div`
	border-radius: 16px;
	box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
	padding: 1em 0;
	width: 80%;
	margin-inline: auto;
`;

const ListWrapper = styled.div`
	width: 80%;
	margin-inline: auto;
`;

const AddMinusButton = styled.button``;
export const Header = () => {
	const [cityChange, setCityChange] = useState("Helsinki, Finland");
	const [toggleLocationList, setToggleLocationList] = useState(false);
	const [toggleGuestNumber, setToggleGuestNumber] = useState(false);
	const handleCityChange = (event) => {
		setCityChange(event.target.value);
	};
	const handleToggleLocationList = (e) => {
		setToggleLocationList(!toggleLocationList);
	};
	const handleToggleGuestNumber = (e) => {
		setToggleGuestNumber(!toggleGuestNumber);
	};
	return (
		<div className={styles.header}>
			<div>
				<Wrapper>
					<FlexContainer justifyItems="space-around">
						<div className={styles.locationInput} onClick={handleToggleLocationList}>
							<FlexContainer flexDirection="column">
								<label>Location</label>
								<Input
									readOnly
									type="text"
									name="location"
									placeholder={cityChange}
								></Input>
							</FlexContainer>
						</div>
						<div className={styles.guestInput} onClick={handleToggleGuestNumber}>
							<FlexContainer flexDirection="column">
								<label>Guests</label>
								<Input type="text" name="guests" placeholder="Add guests"></Input>
							</FlexContainer>
						</div>
						<div className={styles.search_button}>
							<Button>
								<Icon
									path={mdiMagnify}
									title="User Profile"
									size={1}
									color="white"
								/>
								Search
							</Button>
						</div>
					</FlexContainer>
				</Wrapper>
				<ListWrapper>
					<FlexContainer justifyItems="flex-start">
						{toggleLocationList && (
							<>
								<div className={styles.locationList}>
									{cities.map((city) => {
										return (
											<div className={styles.cityOptionDiv}>
												<ButtonOption
													className={styles.cityOption}
													key={city}
													value={city}
													onClick={(event) => handleCityChange(event)}
												>
													<Icon
														path={mdiMapMarker}
														title="User Profile"
														size={1}
														color="#4f4f4f"
													/>
													{city}
												</ButtonOption>
											</div>
										);
									})}
								</div>
							</>
						)}
						{toggleGuestNumber && (
							<>
								<div className={styles.addRemoveGuest}>
									<div className={styles.adultGuest}>
										<div>Adults</div>
										<div className={styles.gray}>Ages 13 or above</div>
										<FlexContainer justifyItems="space-between">
											<button>-</button>
											<span>0</span>
											<button>+</button>
										</FlexContainer>
									</div>
									<div className="child-guest">
										<div>Children</div>
										<div className={styles.gray}>Age 2-12</div>
										<FlexContainer justifyItems="space-between">
											<button>-</button>
											<span>0</span>
											<button>+</button>
										</FlexContainer>
									</div>
								</div>
							</>
						)}
					</FlexContainer>
				</ListWrapper>
			</div>
			<FlexContainer justifyItems="space-between">
				<Logo />
				<FilterOptions />
			</FlexContainer>
		</div>
	);
};
