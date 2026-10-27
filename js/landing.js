document.addEventListener("DOMContentLoaded", function () {
  const links = Array.from(document.querySelectorAll(".toc-side a"));
  if (!("IntersectionObserver" in window) || !links.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-20% 0px -60% 0px" }
  );

  links.forEach(function (link) {
    const section = document.querySelector(link.getAttribute("href"));
    if (section) observer.observe(section);
  });
});
