import { gsap } from "gsap";
let elementsArray = [];
let scrollArray = [];
const tl = gsap.timeline({ paused: true });
const stl = gsap.timeline({ paused: true });
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
    tl.fromTo(
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
    console.log(elementsArray);
    tl.fromTo(
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
    ).play();
  }
  function scrollAnimate() {
    scrollArray.forEach((element) => {
      stl.fromTo(
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

  return {
    handleItems,
    handleScrollItems,
    animateItems,
    scrollAnimate,
  };
};
