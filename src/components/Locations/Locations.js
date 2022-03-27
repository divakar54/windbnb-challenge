import { mdiConsoleNetwork } from "@mdi/js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import stays from "../../assets/stays.json";
import FlexContainer from "../../containers/FlexContainer/FlexContainer";
import GridContainer from "../../containers/GridContainer/GridContainer";
import { filterByGuest } from "../../redux/actions/filterActions";
import styles from "./Locations.module.css";

const Locations = () => {
	//will use useSelect hook to fetch Locations which are stored as state in the reducers
	const stayList = useSelector((state) => state.stay);
	console.log("stayList", stayList);
	return (
		<>
			<GridContainer>
				{stayList.map((item) => {
					return (
						<div key={item.id}>
							<img className={styles.image} src={item.photo} alt="apartment" />
							<FlexContainer justifyItems="space-between">
								<div className={styles.font400 + " " + styles.p10}>
									{item.superHost && <>SUPER HOST</>}
								</div>
								<div className={styles.font400 + " " + styles.p10}>
									{item.type}
									{item.beds && <> .{item.beds} beds</>}
								</div>
								<div className={styles.font400 + " " + styles.p10}>
									{item.rating}
								</div>
							</FlexContainer>
							<div className={styles.font600 + " " + styles.p10}>{item.title}</div>
						</div>
					);
				})}
			</GridContainer>
		</>
	);
};

export default Locations;
