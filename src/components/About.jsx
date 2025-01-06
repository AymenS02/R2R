import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const thirdTextRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // First image animation
    gsap.fromTo(leftImageRef.current, 
      { x: '-100vw', opacity: 0 }, 
      { x: '0%', opacity: 1, duration: 2.5, ease: 'power3.out',
        scrollTrigger: {
          trigger: leftImageRef.current,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Right image animation
    gsap.fromTo(rightImageRef.current, 
      { x: '100vw', opacity: 0 }, 
      { x: '0%', opacity: 1, duration: 2.5, ease: 'power3.out',
        scrollTrigger: {
          trigger: rightImageRef.current,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // First text animation
    gsap.fromTo(firstTextRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out',
        scrollTrigger: {
          trigger: firstTextRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Second text animation
    gsap.fromTo(secondTextRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out',
        scrollTrigger: {
          trigger: secondTextRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Third text animation
    gsap.fromTo(thirdTextRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out',
        scrollTrigger: {
          trigger: thirdTextRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div className="font-merriweather h-screen bg-dark flex justify-center items-center flex-col containerItem mb-[6rem]"> 
      <div className="section">
        <div className="" ref={firstTextRef}>
          <h2>Our Mission</h2>
          <p>
            At <i>ЯIIR</i>, we aim to awaken the desire already within you to do something meaningful. By hosting events and building a strong community, we&apos;re proving that our faith isn&apos;t in conflict with the modern West, but can thrive without compromise.
          </p>
        </div>
        <img ref={rightImageRef} className="photos right-image" src="/group.jpg" alt="Group" />
      </div>

      <div className="section">
        <div className="" ref={secondTextRef}>
          <h2>What is R2R?</h2>
          <p>
            R2R stands for &apos;Road To Success&apos;, this brand symbolizes the initial road everyone has to go through in our lives, and from that road, we keep driving to the point of success, with the hope, trust, and belief that God almighty will take us there.
          </p>
        </div>
        <img ref={leftImageRef} className="left-image" src="/logo.png" alt="Logo" />
      </div>

      <div className="gap-4 section">
        <div className="" ref={thirdTextRef}>
          <h2>What We Stand By</h2>
          <p className="mb-4">Our morals, values, and way of life all stem from one thing - Islam. We as Muslims strive to become better by coming closer to God.</p>
          <p>The relentless drive, discipline, and enthusiasm are aspects and characteristics that we as Muslims uphold.</p>
        </div>
        <img className="photosSquare" src="/hike.JPG" alt="Group of people hiking" />
      </div>

      <div className="section">
        <img className="photosSquare" src="/people/pose.JPG" alt="Group of people standing" />
        <div className="">
          <h2>Who inspires us?</h2>
          <p className="mb-4">Our inspiration and who we look up to is the Prophet Muhammed, <i>Peace and Blessings be upon him.</i></p>
          <p>The Prophet, peace and blessings be upon him, said, <strong><i>“A man is upon the religion of his best friend, so let one of you look at whom he befriends.”</i></strong> Source: Sunan al-Tirmidhī 2378</p>
        </div>
      </div>
    </div>
  );
};

export default About;
