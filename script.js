function loader() {
  const video = document.querySelector("#loader video");
  const overlayImage = document.getElementById("overlayImage");
  const nav = document.querySelector("#nav");
  const main = document.querySelector(".main");
  const loader = document.querySelector("#loader");
  const playVideoBtn = document.querySelector(".play1");
  const playText = document.querySelector("#loader p");

  // ✅ Ensure main and nav start hidden
  nav.style.display = "none";
  main.style.display = "none";

  video.addEventListener("ended", () => {
    // Hide the video
    video.style.display = "none";
    gsap.to(playVideoBtn, {
      delay: 2,
      opacity: 1,
    });

    // Make overlay visible
    overlayImage.style.opacity = 1;
    playText.style.opacity = 1;

    const startOverlayAnimation = () => {
      // Remove listeners so it only runs once
      document.removeEventListener("keydown", startOverlayAnimation);
      document.removeEventListener("click", startOverlayAnimation);
      document.removeEventListener("touchstart", startOverlayAnimation);

      // ✅ Call playVideo() immediately on user input
      if (typeof playVideo === "function") {
        playVideo();
      }

      const showContent = () => {
        // ✅ Reveal nav & main only after overlay is gone
        nav.style.display = "block"; // or "flex" if that's your layout
        main.style.display = "block";

        gsap.fromTo(main, { opacity: 0 }, { duration: 1, opacity: 1 });
        gsap.fromTo(nav, { opacity: 0 }, { duration: 1, opacity: 1 });

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
                showContent(); // ✅ show nav & main here
              },
            });
          },
        });
      } else {
        gsap.to(overlayImage, {
          duration: 1.5,
          y: "-35.5%",
          x: "-4.5%",
          scale: 0.1,
          opacity: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(overlayImage, {
              duration: 1,
              opacity: 0,
              onComplete: () => {
                overlayImage.style.display = "none";
                showContent(); // ✅ show nav & main here
              },
            });
          },
        });
      }

      gsap.to(loader, {
        delay: 6,
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
  });
}

function playVideo() {
  const slides = document.querySelector(".slides");
  const videos = document.querySelectorAll(".slides video");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");
  const playText2 = document.querySelector("#loader p");

  playText2.style.opacity = 0;

  let currentIndex = 0;
  const totalVideos = videos.length;

  // Create dots
  for (let i = 0; i < totalVideos; i++) {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
  const dots = document.querySelectorAll(".dots span");

  function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalVideos) % totalVideos;
    updateSlider();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalVideos;
    updateSlider();
  });

  // Auto-slide every 10 seconds (10000ms)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalVideos;
    updateSlider();
  }, 10000);
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

document.querySelector(".play1").onclick = function () {
  window.open(
    "https://www.youtube.com/watch?si=TktEOuflxKCGFU1_&v=kc32ZeDrE_o&feature=youtu.be",
    "_blank"
  );
};

document.querySelector(".play2").onclick = function () {
  window.open("https://www.youtube.com/watch?si=TktEOuflxKCGFU1_&v=kc32ZeDrE_o&feature=youtu.be", "_blank");
};

document.querySelector(".play3").onclick = function () {
  window.open("https://www.youtube.com/watch?si=TktEOuflxKCGFU1_&v=kc32ZeDrE_o&feature=youtu.be", "_blank");
};

document.querySelector(".play4").onclick = function () {
  window.open(
    "https://www.youtube.com/watch?si=I-sbuAdia2vzgVrr&v=yLoqJyNBb04&feature=youtu.be",
    "_blank"
  );
};

document.querySelector(".play5").onclick = function () {
  window.open("https://www.youtube.com/watch?v=RH1QBiSNIAM", "_blank");
};

document.querySelector(".play6").onclick = function () {
  window.open(
    "https://www.youtube.com/watch?si=UXZQ41AbGwlHy1cq&v=77RvrMtVU-o&feature=youtu.be",
    "_blank"
  );
};

document.querySelector(".play7").onclick = function () {
  window.open("https://www.youtube.com/watch?v=XcA3aFxOsMY", "_blank");
};

document.querySelector(".play8").onclick = function () {
  window.open(
    "https://www.youtube.com/watch?si=dSDM14dTN5F1rPKL&v=CroK2JqPx9o&feature=youtu.be",
    "_blank"
  );
};

document.querySelector(".play9").onclick = function () {
  window.open(
    "https://www.youtube.com/watch?si=ocXHS0G6kd7YyMtU&v=dKDGqS24jxk&feature=youtu.be",
    "_blank"
  );
};

document.querySelector(".play10").onclick = function () {
  window.open("https://www.youtube.com/watch?si=TktEOuflxKCGFU1_&v=kc32ZeDrE_o&feature=youtu.be", "_blank");
};

document.querySelector(".play11").onclick = function () {
  window.open("https://www.youtube.com/watch?v=3XypGEOM_lw", "_blank");
};

document.querySelector(".play12").onclick = function () {
  window.open(
    "https://www.youtube.com/watch?si=GgYlTETp0-PJsyl9&v=2dFWgKBWrbk&feature=youtu.be",
    "_blank"
  );
};

document.querySelector(".play13").onclick = function () {
  window.open(
    "https://www.youtube.com/watch?si=CyJAu_IoGsxzc64A&v=dqRpdkT_17w&feature=youtu.be",
    "_blank"
  );
};
