export function tabDisplay() {
  console.log("tabs tabs tabs ...");
  const buttons = [...document.querySelectorAll(".tab-button")];
  const contents = [...document.querySelectorAll(".tab-content")];

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab"); // ✅ this is correct now!

      // Remove "show" class from all buttons and contents
      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      // Add "show" to clicked button and corresponding content
      btn.classList.add("active");

      const activeTab = document.getElementById(tabId);
      if (activeTab) {
        activeTab.classList.add("active");
      }
    });
  });
}
