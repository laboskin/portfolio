import ScrollReveal from 'scrollreveal';

const ScrollRevealWithConfig = ScrollReveal({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay: 200,
  opacity: 0,
  scale: 1,
  easing: 'ease-in-out',
  reset: false,
  useDelay: 'always',
  viewFactor: 0.25,
});

export { ScrollRevealWithConfig as ScrollReveal };
