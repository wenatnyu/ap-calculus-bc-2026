(() => {
  const menu = document.querySelector(".course-menu");
  const narrow = window.matchMedia("(max-width: 760px)");
  const links = Array.from(menu.querySelectorAll('a[href^="#"]'));
  const sections = links.map(link => document.getElementById(link.hash.slice(1)));

  function setMenuLayout() {
    menu.open = !narrow.matches;
  }

  function updateCurrentUnit() {
    let active = 0;
    const readingEdge = narrow.matches ? 62 : 28;
    for (let index = 0; index < sections.length; index++) {
      if (sections[index].getBoundingClientRect().top <= readingEdge) active = index;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      active = sections.length - 1;
    }
    for (const [index, link] of links.entries()) {
      if (index === active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  }

  setMenuLayout();
  narrow.addEventListener("change", setMenuLayout);
  menu.addEventListener("click", event => {
    if (narrow.matches && event.target.closest('a[href^="#"]')) menu.open = false;
  });

  let scheduled = false;
  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      updateCurrentUnit();
    });
  }
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("pageshow", scheduleUpdate);
  updateCurrentUnit();
})();
