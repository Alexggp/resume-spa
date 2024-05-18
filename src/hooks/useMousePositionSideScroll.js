import { useRef, useEffect } from "react";

const calculateOffsetX = (el, xPosition)=>{
  const xPercent = xPosition/el.clientWidth;
  const realWidth = el.scrollWidth-el.clientWidth;
  return (realWidth*xPercent);

}

export function useMousePositionSideScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onMouseMove = e => {
          console.log(el.clientWidth )
          const scrollX = calculateOffsetX(el, e.x);
        el.scrollTo({
          
          left: scrollX,
          behavior: "auto"
        });
      };
      document.addEventListener("mousemove", onMouseMove);
      return () => document.removeEventListener("mousemove", onMouseMove);
    }
  }, []);
  return elRef;
}