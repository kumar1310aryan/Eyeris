function videoSlides() {
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const videos = slides.querySelectorAll("video");
    const totalSlides = videos.length;
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let currentIndex = 0;
    const intervalTime = 10000; // 10 seconds
    let autoSlide;

    // Function to update slide position
    function updateSlide() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Function to go to next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
    }

    // Function to go to previous slide
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide();
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });

    // Auto slide function
    function startAutoSlide() {
      autoSlide = setInterval(nextSlide, intervalTime);
    }

    // Reset timer when user manually clicks next/prev
    function resetAutoSlide() {
      clearInterval(autoSlide);
      startAutoSlide();
    }

    // Initialize
    updateSlide();
    startAutoSlide();
  });
}
videoSlides();

function nav2() {
  const hamburger = document.getElementById("hamburger");
  const menuPanel = document.getElementById("menuPanel");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuPanel.classList.toggle("show");
  });
}
nav2();

function BoxExpand() {
  document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".container .box");
    const container = document.querySelector(".container");

    boxes.forEach((box) => {
      // When hovering on a box
      box.addEventListener("mouseenter", () => {
        boxes.forEach((b) => b.classList.remove("active"));
        box.classList.add("active");
        container.classList.add("collapsed"); // hide others
      });
    });

    // When leaving the whole container, reset layout
    container.addEventListener("mouseleave", () => {
      boxes.forEach((b) => b.classList.remove("active"));
      container.classList.remove("collapsed");
    });
  });
}
BoxExpand();

document.querySelector(".play1").onclick = function () {
  window.open(
    "https://www.youtube.com/watch?si=TktEOuflxKCGFU1_&v=kc32ZeDrE_o&feature=youtu.be",
    "_blank"
  );
};

document.querySelector(".play2").onclick = function () {
  window.open(
    "https://www.youtube.com/watch?si=TktEOuflxKCGFU1_&v=kc32ZeDrE_o&feature=youtu.be",
    "_blank"
  );
};

document.querySelector(".play3").onclick = function () {
  window.open(
    "https://www.youtube.com/watch?si=TktEOuflxKCGFU1_&v=kc32ZeDrE_o&feature=youtu.be",
    "_blank"
  );
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
  window.open(
    "https://www.youtube.com/watch?si=TktEOuflxKCGFU1_&v=kc32ZeDrE_o&feature=youtu.be",
    "_blank"
  );
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

// Map of element IDs to YouTube links
const videoLinks = {
  watchHere1:
    "https://www.youtube.com/watch?si=TktEOuflxKCGFU1_&v=kc32ZeDrE_o&feature=youtu.be",
  watchHere2:
    "https://www.youtube.com/watch?si=TktEOuflxKCGFU1_&v=kc32ZeDrE_o&feature=youtu.be",
  watchHere3:
    "https://www.youtube.com/watch?si=TktEOuflxKCGFU1_&v=kc32ZeDrE_o&feature=youtu.be",
  watchHere4:
    "https://www.youtube.com/watch?si=I-sbuAdia2vzgVrr&v=yLoqJyNBb04&feature=youtu.be",
  watchHere5: "https://www.youtube.com/watch?v=RH1QBiSNIAM",
  watchHere6:
    "https://www.youtube.com/watch?si=UXZQ41AbGwlHy1cq&v=77RvrMtVU-o&feature=youtu.be",
  watchHere7: "https://www.youtube.com/watch?v=XcA3aFxOsMY",
  watchHere8:
    "https://www.youtube.com/watch?si=dSDM14dTN5F1rPKL&v=CroK2JqPx9o&feature=youtu.be",
  watchHere9:
    "https://www.youtube.com/watch?si=ocXHS0G6kd7YyMtU&v=dKDGqS24jxk&feature=youtu.be",
  watchHere10:
    "https://www.youtube.com/watch?si=TktEOuflxKCGFU1_&v=kc32ZeDrE_o&feature=youtu.be",
  watchHere11: "https://www.youtube.com/watch?v=3XypGEOM_lw",
  watchHere12:
    "https://www.youtube.com/watch?si=GgYlTETp0-PJsyl9&v=2dFWgKBWrbk&feature=youtu.be",
  watchHere13:
    "https://www.youtube.com/watch?si=CyJAu_IoGsxzc64A&v=dqRpdkT_17w&feature=youtu.be",
};

// Loop through each entry and assign click + hover effects
for (const [id, url] of Object.entries(videoLinks)) {
  const el = document.querySelector(`#${id}`);
  if (el) {
    el.style.cursor = "pointer";
    el.onclick = () => window.open(url, "_blank");
  }
}
