const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 76; // header height;

    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: "smooth",
    });
  }
};

export default scrollToSection;
