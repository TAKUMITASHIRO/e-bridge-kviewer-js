(function () {
  const REPLACEMENTS = [
    { keyword: "メニュー", replaceWith: "Menu" },
    { keyword: "詳細", replaceWith: "Lihat Detail" },
    { keyword: "並べ替え", replaceWith: "Urutkan" }
  ];

  function replaceTextInElements() {
    const allElements = document.querySelectorAll("*");
    allElements.forEach((el) => {
      if (el.children.length === 0 && el.textContent) {
        REPLACEMENTS.forEach(({ keyword, replaceWith }) => {
          if (el.textContent.includes(keyword)) {
            el.textContent = el.textContent.replace(keyword, replaceWith);
          }
        });
      }
    });
  }

  // 定期チェック＋MutationObserver併用
  const interval = setInterval(() => {
    replaceTextInElements();
  }, 500);

  setTimeout(() => clearInterval(interval), 30000);

  const observer = new MutationObserver(() => {
    replaceTextInElements();
  });

  document.addEventListener("DOMContentLoaded", () => {
    replaceTextInElements();
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
})();
