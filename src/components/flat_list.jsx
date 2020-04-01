import React from 'react';
import Flat from './flat';

const Flatlist = ({ flatslist, selectedflat }) => {
  return (
    <div className="flat-list">
      {flatslist.map((flat, index) => <Flat flat={flat} key={flat.name} index={index} selectedflat={selectedflat} />)}
    </div>
  );
};

export default Flatlist;
