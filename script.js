// Add smooth animations to menu items when they appear
document.querySelectorAll(".menu").forEach((section) => {
  section.addEventListener("scroll", () => {
    section.querySelectorAll("li").forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }, index * 100); // Staggered animations
    });
  });
});
