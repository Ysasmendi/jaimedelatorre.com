const timeline = document.querySelector('.career-list');

if (timeline) {
  const rows = [...timeline.querySelectorAll('.career-item')];
  const links = rows.map(row => row.querySelector('.timeline-year'));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const hover = matchMedia('(hover: hover) and (pointer: fine)');
  let pointerY = null;
  let focused = -1;
  let selected = -1;
  let frame = 0;

  function render() {
    frame = 0;
    const boxes = rows.map(row => row.getBoundingClientRect());
    const centers = boxes.map(box => box.top + 28);
    const readingLine = innerHeight * 0.42;
    let active = centers.reduce((best, y, index) =>
      Math.abs(y - readingLine) < Math.abs(centers[best] - readingLine) ? index : best, 0);
    if (scrollY < 4) active = 0;
    else if (scrollY + innerHeight >= document.documentElement.scrollHeight - 4) active = rows.length - 1;

    let lens = centers[active];
    if (focused >= 0 || selected >= 0) {
      active = focused >= 0 ? focused : selected;
      lens = centers[active];
    } else if (pointerY !== null && hover.matches) {
      lens = pointerY;
      active = boxes.findIndex(box => pointerY >= box.top && pointerY < box.bottom);
      if (active < 0) active = 0;
    }

    rows.forEach((row, index) => {
      // Measure stable rows, never the scaled labels, so the lens cannot jitter.
      const distance = centers[index] - lens;
      const strength = Math.max(0, 1 - Math.abs(distance) / 145);
      row.style.setProperty('--year-scale', reduceMotion.matches ? 1 : 1 + strength * 0.42);
      row.style.setProperty('--year-shift', `${reduceMotion.matches ? 0 : Math.sign(distance) * strength * 3}px`);
      row.classList.toggle('is-active', index === active);
      if (index === active) links[index].setAttribute('aria-current', 'step');
      else links[index].removeAttribute('aria-current');
    });
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(render);
  }
  timeline.addEventListener('pointermove', event => {
    if (!hover.matches || event.pointerType === 'touch') return;
    focused = -1;
    selected = -1;
    pointerY = event.clientY;
    schedule();
  });
  timeline.addEventListener('pointerleave', () => { pointerY = null; schedule(); });
  timeline.addEventListener('focusin', event => {
    focused = links.indexOf(event.target);
    schedule();
  });
  timeline.addEventListener('focusout', () => { focused = -1; schedule(); });
  timeline.addEventListener('click', event => {
    const link = event.target.closest('.timeline-year');
    if (!link) return;
    selected = links.indexOf(link);
    pointerY = null;
    schedule();
  });
  function resumeReading() { focused = -1; selected = -1; pointerY = null; schedule(); }
  addEventListener('wheel', resumeReading, { passive: true });
  addEventListener('touchstart', resumeReading, { passive: true });
  addEventListener('keydown', event => {
    if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) resumeReading();
  });
  addEventListener('scroll', () => { pointerY = null; schedule(); }, { passive: true });
  addEventListener('resize', schedule);
  reduceMotion.addEventListener('change', schedule);
  render();
}
