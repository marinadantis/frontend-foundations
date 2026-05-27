// Mobile navigation link button
const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const navBar = document.querySelector(".nav-bar");

openMenuBtn.addEventListener("click", () => {
  navBar.classList.add("show-menu");

  openMenuBtn.classList.add("hidden");
  closeMenuBtn.classList.remove("hidden");
});

closeMenuBtn.addEventListener("click", () => {
  navBar.classList.remove("show-menu");

  closeMenuBtn.classList.add("hidden");
  openMenuBtn.classList.remove("hidden");
});

// Navigation bar link selection to display respective detail section
const navLinks = document.querySelectorAll(".nav-list a");
const sections = document.querySelectorAll(".section-content");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // remove active from all
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    // add active to clicked item
    link.classList.add("active");

    // add hidden to all
    sections.forEach((section) => {
      section.classList.add("hidden");
    });

    // show selected section
    const selectedSection = document.getElementById(link.dataset.section);
    selectedSection.classList.remove("hidden");

    // close mobile menu after click
    if (window.innerWidth < 768) {
      navBar.classList.remove("show-menu");
      closeMenuBtn.classList.add("hidden");
      openMenuBtn.classList.remove("hidden");
    }
  });
});

// Contact us form submission
emailjs.init("ES3b-8p9MU4tg-mBT");

const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = document.querySelector(".btn-submit");

  btn.textContent = "Sending...";

  try {
    await emailjs.sendForm("service_d0ckd7c", "template_bksl7o8", form);

    alert("Message sent successfully!");

    form.reset();
  } catch (error) {
    alert("Failed to send message.");
    console.error(error);
  }

  btn.textContent = "Submit";
});
