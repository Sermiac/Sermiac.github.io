function scrollToSection(section) {
  const target = document.querySelector(section);
  if (!target) return;
  const offset = 80;

  const elementPosition =
    target.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: elementPosition - offset,
    behavior: `smooth`,
  });
}
