var np = gsap.timeline();

np.from("header ,.logo, .item1 a  , footer,.foot-main, info h5 a", {
  y: -30,
  duration: 0.1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});
gsap.from(" #btn", {
  y: 100,
  opacity: 0,
  duration: 2,
  stagger: 0.2,
});
gsap.from(".main ,.content-img, .overview ", {
    y: -100,
    opacity: 0,
    duration: 2,
    stagger: 0.3,
  });
  
