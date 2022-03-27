import React from "react";

function GridContainer(props) {
	const displayGrid = {
		display: "grid",
		gap: "1em",
		gridTemplateColumns: "repeat(3, 1fr)",
	};

	return <div style={displayGrid}>{props.children}</div>;
}

export default GridContainer;
