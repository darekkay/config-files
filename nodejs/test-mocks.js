// https://github.com/facebook/jest/issues/4545
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

global.matchMedia = function() {
  return {
    matches: false,
    addListener: () => {},
    removeListener: () => {}
  };
};
