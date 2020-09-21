import React, { Fragment } from 'react';

const Table = (props) => {
  const renderPlates = () => {
    return props.empties.map((x, index) => {
      return (
        <div
          key={index + 1}
          className='empty-plate'
          style={{ top: -7 * index }}
        />
      );
    });
  };

  return (
    <Fragment>
      <h1 className='remaining'>You have: ${props.money} remaining!</h1>
      <div className='table'>
        <div className='stack'>{renderPlates([])}</div>
      </div>
    </Fragment>
  );
};

export default Table;
