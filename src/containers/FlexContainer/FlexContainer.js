import React from 'react'


function FlexContainer(props) {

  const flex = {
    display : 'flex',
    justifyContent : props.justifyItems
  }

  return (
    <div style={flex}>{props.children}</div>
  )
}

export default FlexContainer