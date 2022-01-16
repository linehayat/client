import React from 'react';

function AboutUsSlide2() {
  return (
    <div className="slide1ContentPositioning">
      <h2>What We Do:</h2>
      <div>
        <p>
          We are always here to lend a listening ear on for whatever you may
          be facing right now. We listen.
        </p>
        <p>Feel free to reach us through our call or chat services.</p>
        <p>You may want to talk about:</p>
        <ul
          style={{ width: 'fit-content', textAlign: 'left' }}
          className="crimson-font highlight"
        >
          <li style={{ width: 'fit-content' }}>
            <p>Study stress</p>
          </li>
          <li style={{ width: 'fit-content' }}>
            <p>Confusions</p>
          </li>
          <li style={{ width: 'fit-content' }}>
            <p>Feeling lost/alone/empty</p>
          </li>
          <li style={{ width: 'fit-content' }}>
            <p>Life challenges</p>
          </li>
          <li style={{ width: 'fit-content' }}>
            <p>Anything that concerns you</p>
          </li>
        </ul>
        <h4>#You Share, We Care</h4>
      </div>
    </div>
  );
}

export default AboutUsSlide2;
