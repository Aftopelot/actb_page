document.addEventListener("DOMContentLoaded", function () {
  var page = document.getElementById("content");
  if (!page) return;

  var stage = page.querySelector("[data-actb-stage-image]");
  var thumbs = page.querySelectorAll("[data-actb-thumb]");
  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      var src = thumb.getAttribute("data-image-src");
      var alt = thumb.getAttribute("data-image-alt") || "";
      if (stage && src) {
        stage.src = src;
        stage.alt = alt;
      }
      thumbs.forEach(function (item) { item.classList.remove("is-active"); item.setAttribute("aria-pressed", "false"); });
      thumb.classList.add("is-active");
      thumb.setAttribute("aria-pressed", "true");
    });
  });
});
