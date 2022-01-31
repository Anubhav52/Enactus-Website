import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { timelineSlides } from '../data_timeline';
import Timeline_slide from './Timeline_slide';
import './Timeline.css';
import { gsap } from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';

function RenderImages({ activeTimelineIndex }) {
  return timelineSlides.map(({ imageUrl }, index) => (
    <img
      className={cn({ 'as-primary': activeTimelineIndex === index })}
      key={imageUrl}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  ));
}

const Timeline_slides = () => {
  const [activeTimelineIndex, setTimelineIndex] = useState(0);

  const timelineSliderRef = useRef(null);
  const timelineSlidesRightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(scrollTrigger);
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineSlidesRightRef.current,
          start: 'top top',
          end: () => `+=${timelineSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });
      return tl;
    }

    const master = gsap.timeline();
    master.add(stopTrigger());
  }, []);

  return (
    <div ref={timelineSliderRef} className='timeline-slides-container'>
      <div className='timeline-slides-left'>
        {timelineSlides.map((timeline, index) => (
          <Timeline_slide
            key={timeline.imageUrl}
            title={timeline.title}
            description={timeline.description}
            index={index}
            updateActiveImage={setTimelineIndex}
          />
        ))}
      </div>
      <div ref={timelineSlidesRightRef} className='timeline-slides-right'>
        <RenderImages activeTimelineIndex={activeTimelineIndex} />
      </div>
    </div>
  );
};

export default Timeline_slides;
