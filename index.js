window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  const hamburgerToggle = document.querySelector("#hamburger-toggle");

  hamburgerToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    hamburgerToggle.classList.toggle("active");
  });

  async function getData(data) {
    const result = await fetch(`json/${data}.json`).then((res) => res.json());
    return result;
  }

  async function addCardEvents() {
    const eventSwiperWrapper = document.querySelector("section#events .swiper-wrapper");
    let events = await getData("event");
    events = events.reverse().slice(0, 6);
    events.map((event) => {
      eventSwiperWrapper.innerHTML += `<div class="swiper-slide ">
  <a href="" class="card__event group relative mx-auto block aspect-[2/3] w-[256px] overflow-hidden rounded-lg shadow-xl xl:w-[300px]">
    <img loading="lazy" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" src="${event.img_path}" alt="" />

    <div class="absolute bottom-5 left-2.5 z-50 w-[calc(100%-20px)] lg:left-4 lg:w-[calc(100%-32px)]">
      <p class="max-w-max rounded-lg bg-[#D9D9D990] px-2 py-1 text-xs uppercase text-white">${event.type}</p>
      <h4 class="mt-4 font-bold text-white">${event.title}</h4>
      <p class="mt-1 text-sm text-white">${event.description}</p>
    </div>
  </a>
  </div>`;
    });
  }

  async function addCardProjects() {
    const projectSwiperWrapper = document.querySelector("section#projects .swiper-wrapper");
    let projects = await getData("project");
    projects = projects.reverse().slice(0, 6);

    projects.map((project) => {
      projectSwiperWrapper.innerHTML += ` <div class="swiper-slide">
              <a href="${project.url}" target="_blank" class="card__project group relative mx-auto block aspect-video w-full overflow-hidden rounded-lg shadow-md">
                <img loading="lazy" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" src="${project.img_path}" alt="" />

                <div class="absolute bottom-5 left-2.5 z-50 w-[calc(100%-20px)] lg:left-4 lg:w-[calc(100%-32px)]">
                  <p class="max-w-max rounded-lg bg-[#D9D9D990] px-2 py-1 text-xs uppercase text-white">${project.type}</p>
                  <h4 class="mt-4 font-bold text-white">${project.title}</h4>
                  <p class="mt-1 text-sm text-white">${project.description}</p>
                </div>
              </a>
            </div>`;
    });
  }

  // Swiper Initializations
  const swiperOffer = new Swiper(".swiper--offers", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 2000,
    },

    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination-offers",
    },
  });

  const swiperMentor = new Swiper(".swiper--mentors", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
      delay: 3000,
    },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      prevEl: ".swiper--mentors .swiper-navigation-prev",
      nextEl: ".swiper--mentors .swiper-navigation-next",
    },
  });

  const swiperTestimonials = new Swiper(".swiper--testimonials", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
    },
    spaceBetween: 32,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      prevEl: ".swiper--projects #swiper--projects__navigator--prev",
      nextEl: ".swiper--projects #swiper--projects__navigator--next",
    },
  });

  async function renderSwippers() {
    await addCardEvents();
    const swiperEvents = new Swiper(".swiper--events", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 3000,
      },

      slidesPerView: 1,
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        prevEl: ".swiper--events #swiper--events__navigator--prev",
        nextEl: ".swiper--events #swiper--events__navigator--next",
      },
    });
    await addCardProjects();
    const swiperProjects = new Swiper(".swiper--projects", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 3000,
      },

      slidesPerView: 1,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },

      // If we need pagination

      // Navigation arrows
      navigation: {
        prevEl: ".swiper--projects #swiper--projects__navigator--prev",
        nextEl: ".swiper--projects #swiper--projects__navigator--next",
      },

      // And if we need scrollbar
    });
  }
  renderSwippers();
});
