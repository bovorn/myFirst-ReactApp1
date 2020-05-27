import React from 'react';

const Scroll = (props) => {
  return (
    <div style={style.Scroll}>
      {props.children}
    </div>
  );
};

const style={
  Scroll: { 
    overflowX: 'hide', 
    overflowY: 'scroll', 
    border: '5px solid rgb(0, 88, 88)', 
    height: '800px', 
    maxWidth: '1200px', 
    margin: '20px auto'}
}

export default Scroll;