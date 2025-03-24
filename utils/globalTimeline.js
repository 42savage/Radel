import { gsap } from "gsap";
let elementsArray = [];
let scrollArray = [];
export const globalTimeline = () => {
  function handleItems(items) {
    if (Array.isArray(items)) {
      elementsArray.push(...items);
    } else {
      elementsArray.push(items);
    }
  }
  function handleScrollItems(items) {
    scrollArray = items;
  }

  function animateItems() {
    const timeline = gsap.timeline({ paused: true });
    timeline.fromTo(
      elementsArray[0],
      {
        yPercent: 0,
      },
      {
        yPercent: -100,
        ease: "power4.inOut",
        duration: 1,
      }
    );
    elementsArray.shift();
    timeline
      .fromTo(
        elementsArray,
        {
          y: -32,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power4.inOut",
          stagger: 0.05,
        }
      )
      .play();
  }
  function scrollAnimate() {
    const timeline = gsap.timeline({ paused: true });
    scrollArray.forEach((element) => {
      timeline.fromTo(
        element,
        {
          y: -64,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: element,
            scrub: 5,
            start: "top bottom+=20",
            end: "top center",
            markers: false,
          },
        }
      );
    });
  }

  return { handleItems, handleScrollItems, animateItems, scrollAnimate };
};
