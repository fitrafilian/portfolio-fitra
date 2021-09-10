const sections = document.querySelectorAll("section");

const options = {
  threshold: 1,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const id = entry.target.id;
    let page = document.querySelector(`[data-page=${id}]`);
    page.classList.remove("active");

    if (entry.isIntersecting) {
      page = document.querySelector(`[data-page=${id}]`);
      page.classList.add("active");
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
