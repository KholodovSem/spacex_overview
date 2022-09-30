import React from 'react';
import {useState} from 'react';

function PullToRefresh({children, onRefresh}) {
  const [position, setPosition] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  const handleTouchStart = () => {
    setMouseDown(true);
  };

  const handleTouchEnd = () => {
    setMouseDown(false);
    if (position > 10) {
      setTimeout(() => {
        onRefresh();
      }, 1000);
    }
    setPosition(0);
  };

  const handleTouchMove = (e) => {
    if (mouseDown) {
      if (e.targetTouches[0].pageY > 230) {
        return;
      }
      if (position <= 85) {
        setPosition(
            (prevState) => prevState + (e.targetTouches[0].pageY - 160),
        );
      }
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      style={{
        transform: `translateY(${position}px)`,
        transition: 'all 0.3s linear',
      }}
    >
      {children}
    </div>
  );
}

export default PullToRefresh;
