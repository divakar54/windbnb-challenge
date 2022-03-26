import React from "react";
import stays from "../../assets/stays.json";
import FlexContainer from "../../containers/FlexContainer/FlexContainer";
import GridContainer from "../../containers/GridContainer/GridContainer";
import styles from "./Locations.module.css";

const Locations = () => {
	return (
		<>
			<GridContainer>
				{stays.map((item) => {
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
