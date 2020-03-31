import React from 'react';
import Flat from './flat';

const Flatlist = ({ flatslist }) => {
  return (
    <div className="flat-list">
      {flatslist.map(({ name, imageUrl, price, priceCurrency }) => <Flat name={name} price={price} priceCurrency={priceCurrency} imageUrl={imageUrl} key={name} />)}
    </div>
  );
};

export default Flatlist;
