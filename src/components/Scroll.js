import React from 'react';

const Scroll = (props) => {
  const { isPending } = props;
  const style={
    Scroll: { 
      overflowX: 'hide', 
      overflowY: isPending ? 'hide' : 'scroll',
      border: '5px solid rgb(0, 88, 88)', 
      height: '720px', 
      maxWidth: '1200px', 
      margin: '20px auto'
    }
  }

  return (
    <div style={style.Scroll}>
      {props.children}
    </div>
  );
};



export default Scroll;