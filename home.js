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
// videoSlides();

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

sheryAnimation();
Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});