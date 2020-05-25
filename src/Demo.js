import React from 'react';

function Demo(props) {
  const { params } = props.match;
  return (
    <div>
      <h4>Demo page!</h4>
      <div><b>Parameter 1: </b>{params.p1}</div>
      <div><b>Parameter 2: </b>{params.p2}</div>
    </div>
  )
}

export default Demo;