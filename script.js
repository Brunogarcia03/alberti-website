document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector(".hero-video h1");
  const h2 = document.querySelector(".hero h2");
  const h5 = document.querySelector(".hero h5");
  const header = document.querySelector("header");

  window.scrollTo(0, 0);

  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  // Línea de tiempo
  const tl = gsap.timeline({
    ease: "power2.out",
  });

  tl.to(h1, {
    fontSize: "calc(1vw + 1.5rem)",
    duration: 2,
    delay: 1.5,
  })
    .from(
      "video",
      {
        width: "100%",
        height: "100%",
        marginBottom: "0vh",
        borderRadius: "0px",
        duration: 3,
      },
      "<"
    )
    .to(h1, {
      opacity: 0,
    })
    .from(h2, { autoAlpha: 0, y: -15 })
    .from(h5, { autoAlpha: 0, y: -15 })
    .add(() => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    })
    .from(header, { autoAlpha: 0, y: "-100%" });
});
