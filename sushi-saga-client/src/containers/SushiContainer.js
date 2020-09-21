import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  const renderSushi = () => {
    const { api, empties, money } = props;
    return api.map((sushi) => (
      <Sushi key={sushi.id} sushi={sushi} empties={empties} money={money} />
    ));
  };

  return (
    <Fragment>
      <div className='belt'>
        {renderSushi()}
        <MoreButton click={props.click} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
