const sections = document.querySelectorAll('.section');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateSection() {
  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    } else {
      section.style.opacity = 0;
      section.style.transform = 'translateY(50px)';
    }
  });
}