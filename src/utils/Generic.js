import { useEffect, useState } from "react";

export const waitFor = (delay) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true)
  }, delay);
})

export const useOnScreen = (ref, rootMargin = "0px") => {
  // State and setter for storing whether element is visible
  const [intersectingEls, setIntersectingEls] = useState([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      function([entry]) {
        // Update our state when observer callback fires
        if(entry.isIntersecting) setIntersectingEls(currentEls => [...new Set([...currentEls, entry.target.id])]);
        else setIntersectingEls(currentEls => currentEls.filter(i => i !== entry.target.id))
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      ref.current.forEach(element => {
        observer.observe(element.current);
      });
    }
    // return () => {
    //   ref.current.forEach(element => {
    //     if(element){
    //       observer.unobserve(element.current);
    //     }
    //   });
    // };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return intersectingEls;
}

export const getCurrentIdx = (id = '0') => +id.match(/\d/g)