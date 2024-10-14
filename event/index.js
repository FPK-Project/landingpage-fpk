const navbar = document.querySelector("nav");
const hamburgerToggle = document.querySelector("#hamburger-toggle");

hamburgerToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburgerToggle.classList.toggle("active");
});

async function getData(data) {
  const result = await fetch(`../json/${data}.json`).then((res) => res.json());
  return result;
}

async function renderCardEvents() {
  const cardContainer = document.querySelector("section#event .card-event-container");
  let events = await getData("event");
  events = events.reverse();

  events.map((event) => {
    cardContainer.innerHTML += `<div class="card w-full md:w-80 lg:w-72 xl:w-[48%] ">
            <div class="group overflow-hidden rounded-lg shadow-lg">
              <img class="h-80 w-full object-cover transition-transform duration-300 hover:transition-transform hover:duration-300 group-hover:scale-110" src="../${event.img_path}" alt="" />
            </div>
            <div class="mt-2 inline-block rounded-lg bg-[rgba(217,217,217,0.3)] p-2">
              <p class="text-sm font-semibold">${event.type}</p>
            </div>
            <h1 class="mt-2 text-xl font-bold">${event.title}</h1>
            <div class="flex items-center justify-between">
              <p class="mt-1 xl:max-w-[70%]">${event.description}</p>
              <svg class="hidden w-16 xl:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 64">
                <rect width="63" height="63" fill="url(#a)" rx="31.5" transform="matrix(-1 0 0 1 63 .106)" />
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m33.083 39.606 7.917-8m0 0-7.917-8m7.917 8H22" />
                <defs>
                  <linearGradient id="a" x1="31.5" x2="31.5" y1="0" y2="63" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7E3E" />
                    <stop offset="1" stop-color="#F49D03" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>`;
  });
}

renderCardEvents();
