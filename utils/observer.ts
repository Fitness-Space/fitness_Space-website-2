const observer = (refValue, cssClass) => {
  const observerFunction = () => {
    const reveal = (entries, observer) => {
      const [entry] = entries;
 
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        entry.target.classList.remove(cssClass);
        observer.unobserve(entry.target);
      }
    };

    const theObserver = new IntersectionObserver(reveal, {
      root: null,
      threshold: 0.15,
    });

    theObserver.observe(refValue.current);
  };

  return observerFunction();
};

export default observer;
