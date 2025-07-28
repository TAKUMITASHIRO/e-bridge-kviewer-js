(function () {
  const REPLACEMENTS = [
    { original: "詳細", replaceWith: "Lihat Detail" },
    { original: "並べ替え", replaceWith: "Sort" },
  ];

  function replaceTextContent() {
    document.querySelectorAll("span").forEach((el) => {
      REPLACEMENTS.forEach(({ original, replaceWith }) => {
        if (el.textContent && el.textContent.trim() === original) {
          el.textContent = replaceWith;
        }
      });
    });
  }

  // 初回実行
  document.addEventListener("DOMContentLoaded", () => {
    replaceTextContent();

    // DOM変化を監視して置換し続ける
    const observer = new MutationObserver(() => {
      replaceTextContent();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
})();
