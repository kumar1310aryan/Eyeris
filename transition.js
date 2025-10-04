// const overlay = document.getElementById("transition");

// // Animate IN when page loads
// window.addEventListener("load", () => {
//   gsap.fromTo(
//     overlay,
//     { y: 0 },
//     { y: "-100%", duration: 0.8, ease: "power2.inOut" }
//   );
// });

// // Animate OUT on any nav click
// document.querySelectorAll("h3[onclick]").forEach((navItem) => {
//   navItem.addEventListener("click", (e) => {
//     e.preventDefault(); // prevent instant navigation

//     // Extract the URL from the onclick attribute
//     const onclickValue = navItem.getAttribute("onclick");
//     const match = onclickValue.match(
//       /window\.location\.href\s*=\s*['"](.+?)['"]/
//     );
//     if (!match) return;

//     const targetUrl = match[1];

//     gsap.to(overlay, {
//       y: 0,
//       duration: 0.8,
//       ease: "power2.inOut",
//       onComplete: () => {
//         window.location.href = targetUrl;
//       },
//     });
//   });
// });

window.addEventListener("load", () => {
  // Classy fade + slight scale effect
  gsap.fromTo(
    "body",
    { opacity: 0, scale: 1 },
    { opacity: 1, scale: 1, duration: 2.5, ease: "power2.out" }
  );
});
