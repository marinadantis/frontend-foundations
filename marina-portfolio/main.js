const navLinks = document.querySelectorAll(".nav-list a");
const sections = document.querySelectorAll(".section-content");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
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
  });
});
