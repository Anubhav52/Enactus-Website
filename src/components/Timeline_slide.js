import React, { useEffect, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import './Timeline.css';

const Timeline_slide = ({ title, description, index, updateActiveImage }) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div ref={ref} className='timeline-slide'>
      <h3 className='timeline-slide-title'>{title}</h3>
      <p className='timeline-slide-description'>{description}</p>
    </div>
  );
};

export default Timeline_slide;
