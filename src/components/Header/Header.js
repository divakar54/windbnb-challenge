import React from "react";
import FlexContainer from "../../containers/FlexContainer/FlexContainer.js";
import Logo from "../Logo/Logo";
import FilterOptions from "../FilterOptions/FilterOptions.js";
import styles from "./Header.module.css";

export const Header = () => {
	return (
		<div className={styles.header}>
			<FlexContainer justifyItems="space-between">
				<Logo />
				<FilterOptions />
			</FlexContainer>
		</div>
	);
};
