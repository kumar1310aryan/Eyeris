function loader() {
  const video = document.querySelector("#loader video");
  const eyeris = document.querySelector("#center img");
  const nav = document.querySelector("#nav");
  const main = document.querySelector(".main");
  const loader = document.querySelector("#loader");
  // const playVideoBtn = document.querySelector(".play1");
  // const playText = document.querySelector("#loader p");
  const center = document.querySelector("#links #center");
  const svg = document.querySelector("#verticalArrow");
  const textSvg = document.querySelector("#textSvg");
  const arrowContainer = document.querySelector(".arrow-container");

  nav.style.display = "none";
  main.style.display = "none";
  arrowContainer.style.display = "none";

  video.addEventListener("ended", () => {
    // Smoothly fade out the video before hiding it
    gsap.to(video, {
      duration: 1, // fade duration (1 second)
      opacity: 0, // fade out to invisible
      ease: "power2.out",
      onComplete: () => {
        video.style.display = "none"; // hide after fade completes
        eyeris.style.opacity = 1;
        arrowContainer.style.display = "block";

        nav.style.display = "block";

        const startOverlayAnimation = () => {
          // Remove listeners so it only runs once
          document.removeEventListener("keydown", startOverlayAnimation);
          document.removeEventListener("click", startOverlayAnimation);
          document.removeEventListener("touchstart", startOverlayAnimation);
          // document.removeEventListener("scroll", startOverlayAnimation);

          // ✅ Call playVideo() immediately on user input
          if (typeof firstVideo === "function") {
            firstVideo();
          }

          const showContent = () => {
            // ✅ Reveal nav & main only after overlay is gone
            nav.style.display = "block";
            main.style.display = "block";

            gsap.fromTo(main, { opacity: 0 }, { duration: 1, opacity: 1 });
            gsap.fromTo(nav, { opacity: 1 }, { duration: 1, opacity: 1 });

            updateNavDisplay();
          };

          if (window.innerWidth < 500) {
            gsap.to(overlayImage, {
              duration: 1.8,
              y: "-35.5%",
              x: "15.9%",
              scale: 0.08,
              opacity: 0,
              ease: "power2.inOut",
              onComplete: () => {
                gsap.to(overlayImage, {
                  duration: 1,
                  opacity: 0,
                  onComplete: () => {
                    overlayImage.style.display = "none";
                    showContent();
                  },
                });
              },
            });
          } else {
            gsap.to(center, {
              duration: 1.5,
              ease: "power3.out",
            });
            textSvg.style.display = "none";
            eyeris.addEventListener("click", () => {
              window.location.href = "home.html";
            });
            gsap.to(svg, {
              scale: 1.15, // scale up
              duration: 1.1, // animate for 1.3 seconds
              ease: "power2.out", // smooth easing
              transformOrigin: "top center",
              onComplete: () => {
                gsap.to(svg, {
                  opacity: 0, // fade out
                  duration: 0.5, // quick fade
                  display: "none", // hide completely after fade
                });
              },
            });

            gsap.to(eyeris, {
              duration: 1.5,
              width: "12.5vw",
              x: "22vw",
              y: "3vw",
              ease: "power3.out",
            });

            gsap.to("#links", {
              duration: 1.5,
              gap: "15vw",
              ease: "power3.out",
              onComplete: showContent,
            });
          }

          gsap.to(loader, {
            delay: 5,
            zIndex: -5,
          });
        };

        // Ensure document is focusable and focused
        document.body.tabIndex = -1;
        document.body.focus();

        // Listen for any key/click/touch
        document.addEventListener("keydown", startOverlayAnimation);
        document.addEventListener("click", startOverlayAnimation);
        document.addEventListener("touchstart", startOverlayAnimation);
        // document.addEventListener("scroll", startOverlayAnimation, { once: true });
      },
    });
  });
}

function updateNavDisplay() {
  if (window.innerWidth < 500) {
    nav.style.display = "none";
    nav2.style.display = "block";
  } else {
    nav.style.display = "block";
  }
}

window.addEventListener("resize", updateNavDisplay);

loader();
const boxes = document.querySelectorAll(".box");
const container = document.querySelector(".container");

function resetBoxes() {
  boxes.forEach((b) => b.classList.remove("active"));
}

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    resetBoxes();
    container.classList.add("collapsed");
    box.classList.add("active");
  });

  box.addEventListener("click", () => {
    resetBoxes();
    container.classList.add("collapsed");
    box.classList.add("active");
  });
});

container.addEventListener("mouseleave", () => {
  resetBoxes();
  container.classList.remove("collapsed");
});

function SDGChange() {
  const images = [
    "./SDGs - gif/E_GIF_03.gif",
    "./SDGs - gif/E_GIF_04.gif",
    "./SDGs - gif/E_GIF_06.gif",
    "./SDGs - gif/E_GIF_07.gif",
    "./SDGs - gif/E_GIF_11.gif",
    "./SDGs - gif/E_GIF_13.gif",
    "./SDGs - gif/E_GIF_14.gif",
    "./SDGs - gif/E_GIF_15.gif",
    "./SDGs - gif/E_GIF_17.gif",
  ];

  let index = 0;
  const imgElement = document.getElementById("sdgImg");

  setInterval(() => {
    index = (index + 1) % images.length; // loop back to first after last
    imgElement.src = images[index];
  }, 2000); // change every 2 seconds
}

SDGChange();

function nav2() {
  const hamburger = document.getElementById("hamburger");
  const menuPanel = document.getElementById("menuPanel");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuPanel.classList.toggle("show");
  });
}
nav2();

function firstVideo() {
  document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.getElementById("mainVideo");
    const overlayTitle = document.querySelector("#overlayText h1");
    const overlayDesc = document.querySelector("#overlayText p");
    const watchHere = document.getElementById("watchHere");
    const progressCircle = document.getElementById("progressCircle");

    // Video data
    const videos = [
      {
        src: "LivingWithCrocs.mp4",
        title: "Living with Crocs",
        desc: "A tale of conversation...",
        link: "https://www.youtube.com/watch?v=kc32ZeDrE_o",
      },
      {
        src: "BeyondOne.mp4",
        title: "Beyond One",
        desc: "The reign of the four kings...",
        link: "https://www.youtube.com/watch?v=kc32ZeDrE_o",
      },
      {
        src: "ImmrsoveFangs.mp4",
        title: "Immerssive Fangs",
        desc: "A king cobra rescue in 360° VR...",
        link: "https://www.youtube.com/watch?v=kc32ZeDrE_o",
      },
      {
        src: "CleenSweep.mp4",
        title: "Clean Sweep",
        desc: "Dignifying sanitation work...",
        link: "https://www.youtube.com/watch?v=yLoqJyNBb04",
      },
      {
        src: "Defanged.mp4",
        title: "Defanged",
        desc: "Taking the bite off snake myths...",
        link: "https://www.youtube.com/watch?v=RH1QBiSNIAM",
      },
      {
        src: "dellSolar.mp4",
        title: "Solar Community Hub",
        desc: "Bridging the digital divide in public schools...",
        link: "https://www.youtube.com/watch?v=77RvrMtVU-o",
      },
      {
        src: "KCRE.mp4",
        title: "KCRE",
        desc: "Realising a dream to conserve...",
        link: "https://www.youtube.com/watch?v=XcA3aFxOsMY",
      },
      {
        src: "ABCD.mp4",
        title: "ABCD",
        desc: "Conservation begins with the basics...",
        link: "https://www.youtube.com/watch?v=CroK2JqPx9o",
      },
      {
        src: "MERM.mp4",
        title: "MERM",
        desc: "A developmental insight into public health...",
        link: "https://www.youtube.com/watch?v=dKDGqS24jxk",
      },
      {
        src: "MYTRee.mp4",
        title: "My Tree",
        desc: "An afforestation programme by public schools...",
        link: "https://www.youtube.com/watch?v=kc32ZeDrE_o",
      },
      {
        src: "PublicEducation.mp4",
        title: "Redefining Public Education",
        desc: "Walkthrough of a model government school...",
        link: "https://www.youtube.com/watch?v=3XypGEOM_lw",
      },
      {
        src: "Recclaimin.mp4",
        title: "Reclaiming Legacy",
        desc: "A battle against waste in the Himalayan foothills...",
        link: "https://www.youtube.com/watch?v=2dFWgKBWrbk",
      },
      {
        src: "RoleModel.mp4",
        title: "Role mo'Dell's",
        desc: "Today's youth, tomorrow's green innovators...",
        link: "https://www.youtube.com/watch?v=dqRpdkT_17w",
      },
    ];

    // Shuffle helper
    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    let order = shuffle([...Array(videos.length).keys()]);
    let currentIndex = 0;
    const playDuration = 10000; // 10 seconds per video
    const radius = 46;
    const circumference = 2 * Math.PI * radius;
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;

    let animationFrame = null;

    function playVideo(index) {
      const v = videos[order[index]];
      videoElement.src = v.src;
      overlayTitle.textContent = v.title;
      overlayDesc.textContent = v.desc;
      watchHere.onclick = () => window.open(v.link, "_blank");
      watchHere.style.cursor = "none";

      // Reset progress
      progressCircle.style.strokeDashoffset = circumference;

      // Animate fill clockwise
      let start = null;
      cancelAnimationFrame(animationFrame);
      function animateProgress(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / playDuration, 1);
        progressCircle.style.strokeDashoffset = circumference * (1 - progress);
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animateProgress);
        }
      }
      animationFrame = requestAnimationFrame(animateProgress);
    }

    function nextVideo() {
      currentIndex++;
      if (currentIndex >= videos.length) {
        order = shuffle([...Array(videos.length).keys()]);
        currentIndex = 0;
      }
      playVideo(currentIndex);
    }

    playVideo(currentIndex);
    setInterval(nextVideo, playDuration);
  });
}
firstVideo();

function sheryAnimation() {
  Shery.mouseFollower();
  Shery.makeMagnet(".magnet");
}

function checkWidthAndAnimate() {
  if (window.innerWidth > 500) {
    sheryAnimation();
  }
}

checkWidthAndAnimate();
