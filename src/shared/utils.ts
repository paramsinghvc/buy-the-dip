export function timer(callback: () => void, delay: number) {
  var timerId: number,
    start: number,
    remaining = delay;

  const pause = function () {
    window.clearTimeout(timerId);
    remaining -= Date.now() - start;
  };

  const resume = function () {
    start = Date.now();
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  const clear = function () {
    window.clearTimeout(timerId);
  };

  resume();

  return { pause, resume, clear };
}

export function animationValue(
  duration: number,
  val: number,
  callback: (value: number) => void
) {
  let start: number, previousTimeStamp: number;
  function step(timestamp: number) {
    if (start === undefined) start = timestamp;
    const elapsed = timestamp - start;
    const timeFraction = elapsed / duration;
    if (previousTimeStamp !== timestamp) {
      // Math.min() is used here to make sure the element stops at exactly val
      //   const count = Math.min(0.1 * elapsed, val);
      //   const value = count/val;
      callback(timeFraction * val);
    }

    if (elapsed < duration) {
      // Stop the animation after duration
      previousTimeStamp = timestamp;
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}
