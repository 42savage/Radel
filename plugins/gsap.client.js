import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CSSPlugin);

  // const router = useRouter();
  // router.beforeEach((to, from, next) => {
  //   console.log(ScrollTrigger.getAll(), "jazda");
  //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   next();
  // });

  return {
    provide: {
      gsap,
      ScrollTrigger,
      CSSPlugin,
    },
  };
});
