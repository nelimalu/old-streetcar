
document.addEventListener("DOMContentLoaded", (event) => {
  document.body.addEventListener("mouseup", function() {
    try {
      document.getElementById("content").remove();
    } catch (e) {}
  });
});