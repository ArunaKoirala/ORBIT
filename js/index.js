document.addEventListener("DOMContentLoaded", function () {
  // --- Mega Menu Toggle Logic ---
  const menus = [
    { toggleId: "destinationsDropdown", menuId: "destinationsMenu" },
    { toggleId: "guidesDropdown", menuId: "guidesMenu" },
    { toggleId: "companyDropdown", menuId: "companyMenu" },
  ];

  menus.forEach(({ toggleId, menuId }) => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    toggle.addEventListener("click", function (e) {
      e.preventDefault();

      // Hide other open mega menus
      menus.forEach(({ menuId: otherMenuId }) => {
        if (otherMenuId !== menuId) {
          const otherMenu = document.getElementById(otherMenuId);
          if (otherMenu) otherMenu.classList.remove("show");
        }
      });

      // Toggle current menu
      menu.classList.toggle("show");
    });

    // Close mega menu when clicked outside
    document.addEventListener("click", function (event) {
      const isClickInside =
        toggle.contains(event.target) || menu.contains(event.target);
      if (!isClickInside) {
        menu.classList.remove("show");
      }
    });
  });

  // --- Country-Specific Places Logic for Destinations Menu ---
  const countryData = {
    nepal: [
      "Kathmandu",
      "Pokhara",
      "Lumbini",
      "Chitwan National Park",
      "Everest Base Camp",
      "Rara Lake",
      "Bhaktapur",
      "Patan",
      "Gosaikunda",
      "Bandipur",
      "Ilam",
      "Janakpur",
      "Swayambhunath",
      "Nagarkot",
      "Dhulikhel",
      "Kalinchowk",
      "Tansen",
      "Panch Pokhari",
      "Kathmandu",
      "Pokhara",
      "Lumbini",
      "Chitwan National Park",
      "Everest Base Camp",
      "Rara Lake",
      "Bhaktapur",
      "Patan",
      "Gosaikunda",
      "Bandipur",
      "Ilam",
    ],
    india: [
      "Goa",
      "Manali",
      "Kerala",
      "Rajasthan",
      "Ladakh",
      "Agra",
      "Varanasi",
      "Mumbai",
      "Delhi",
      "Shimla",
      "Jaipur",
      "Udaipur",
      "Darjeeling",
      "Rishikesh",
      "Ooty",
      "Mysore",
      "Amritsar",
      "Sikkim",
      "Goa",
      "Manali",
      "Kerala",
      "Rajasthan",
      "Ladakh",
      "Agra",
      "Varanasi",
      "Mumbai",
      "Delhi",
      "Shimla",
      "Jaipur",
      "Udaipur",
      "Darjeeling",
      "Rishikesh",
      "Ooty",
      "Mysore",
      "Amritsar",
      "Sikkim",
    ],
    thailand: [
      "Bangkok",
      "Phuket",
      "Chiang Mai",
      "Pattaya",
      "Krabi",
      "Ayutthaya",
      "Koh Samui",
      "Hua Hin",
      "Phi Phi Islands",
      "Chiang Rai",
      "Kanchanaburi",
      "Koh Lanta",
      "Surat Thani",
      "Sukhothai",
      "Mae Hong Son",
      "Trang",
      "Koh Tao",
      "Koh Phangan",
      "Bangkok",
      "Phuket",
      "Chiang Mai",
      "Pattaya",
      "Krabi",
      "Ayutthaya",
      "Koh Samui",
      "Hua Hin",
      "Phi Phi Islands",
      "Chiang Rai",
      "Kanchanaburi",
      "Koh Lanta",
      "Surat Thani",
      "Sukhothai",
      "Mae Hong Son",
      "Trang",
      "Koh Tao",
      "Koh Phangan",
    ],
  };

  const countryLinks = document.querySelectorAll(".country-link");
  const placesContent = document.getElementById("placesContent");

  function renderPlaces(country) {
    const places = countryData[country];
    const columnCount = 3;
    const itemsPerColumn = Math.ceil(places.length / columnCount);
    let html = `<h6 class="mb-3">${
      country.charAt(0).toUpperCase() + country.slice(1)
    } Places</h6><div class="row">`;

    for (let i = 0; i < columnCount; i++) {
      html += '<div class="col-md-4"><ul class="list-unstyled">';
      const start = i * itemsPerColumn;
      const end = start + itemsPerColumn;
      const columnItems = places.slice(start, end);
      columnItems.forEach((place) => {
        html += `<li><a href="#">${place}</a></li>`;
      });
      html += "</ul></div>";
    }

    html += "</div>";
    placesContent.innerHTML = html;
  }

  // Default display: Nepal
  renderPlaces("nepal");

  // Handle country tab switching
  countryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      countryLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      const selectedCountry = this.getAttribute("data-country");
      renderPlaces(selectedCountry);
    });
  });
});
// Travel Guides Data
const guideData = {
  planning: [
    "Travel Checklist",
    "Best Travel Times",
    "Budgeting Tips",
    "Packing Essentials",
    "Vaccination & Health Prep",
    "Flight Booking Advice",
    "Visa & Passport Info",
  ],
  destination: [
    "Kathmandu Guide",
    "Pokhara Activities",
    "Lumbini Travel Tips",
    "Everest Trek Basics",
    "Chitwan Jungle Safari",
    "Mountain Flights",
    "Food Tours in Nepal",
  ],
  safety: [
    "Local Etiquette",
    "Travel Insurance",
    "Emergency Contacts",
    "Safe Transport Tips",
    "Solo Travel Advice",
    "Scam Avoidance",
    "Health & Hygiene",
  ],
};

const guideLinks = document.querySelectorAll(".guide-link");
const guideContent = document.getElementById("guideContent");

function renderGuides(type) {
  const items = guideData[type];
  const columnCount = 2;
  const itemsPerColumn = Math.ceil(items.length / columnCount);
  let html = `<h6 class="mb-3">${
    type.charAt(0).toUpperCase() + type.slice(1)
  } Guides</h6><div class="row">`;

  for (let i = 0; i < columnCount; i++) {
    html += '<div class="col-md-6"><ul class="list-unstyled">';
    const start = i * itemsPerColumn;
    const end = start + itemsPerColumn;
    const columnItems = items.slice(start, end);
    columnItems.forEach((item) => {
      html += `<li><a href="#">${item}</a></li>`;
    });
    html += "</ul></div>";
  }

  html += "</div>";
  guideContent.innerHTML = html;
}

// Default: Planning Tips
renderGuides("planning");

guideLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    guideLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    const selectedGuide = this.getAttribute("data-guide");
    renderGuides(selectedGuide);
  });
});

//explore-section

