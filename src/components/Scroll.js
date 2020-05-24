import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll',overflowX: 'auto' ,border: '5px solid black', maxHeight: '600px', maxWidth: '700px', margin: 'auto'}}>
      {props.children}
    </div>
  );
};

export default Scroll;