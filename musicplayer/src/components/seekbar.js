import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className="row">
      <button className="block seek-btn" onClick={() => setSeekTime(appTime - 5)}>
        <FontAwesomeIcon icon={faMinus}/>
      </button>
      <p className="block">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
      />
      <p className="block">{max === 0 ? '0:00' : getTime(max)}</p>
      <button className="block seek-btn" onClick={() => {console.log(appTime +5);setSeekTime(appTime + 5)}} >
      <FontAwesomeIcon icon={faPlus}/>
      </button>
    </div>
  );
};

export default Seekbar;