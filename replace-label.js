(function () {
  const TARGETS = [
    {
      selector: "#__next > div.flex.h-screen.flex-col.overflow-y-auto.kv-container > div.kv-record-menu.sticky.top-0.z-10.px-4 > div > div:nth-child(1) > button > span.text-xs.font-bold",
      original: "メニュー",
      replaceWith: "Menu"
    },
    {
      selector: "#__next > div.flex.h-screen.flex-col.overflow-y-auto.kv-container > div.flex.grow > div > main > div.overflow-x-auto > table > tbody > tr:nth-child(1) > td > div > button > div:nth-child(1)",
      original: "詳細",
      replaceWith: "Lihat Detail"
    },
    {
      selector: "span.text-xs.font-bold", // 汎用的にspan要素を走査
      original: "並べ替え",
      replaceWith: "Urutkan"
    }
  ];

  function replaceLabels() {
    TARGETS.forEach(({ selector, original, replaceWith }) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        if (el.textContent.trim() === original) {
          el.textContent = replaceWith;
        }
      });
    });
  }

  // 初回実行
  document.addEventListener("DOMContentLoaded", () => {
    replaceLabels();

    // DOM変化を監視して自動更新
    const observer = new MutationObserver(() => {
      replaceLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
})();
