import React from "react";

function FlexContainer(props) {
	const flex = {
		display: "flex",
		justifyContent: props.justifyItems,
		alignItems: props.alignItems,
		flexDirection: props.flexDirection
	};

	return <div style={flex}>{props.children}</div>;
}

export default FlexContainer;
