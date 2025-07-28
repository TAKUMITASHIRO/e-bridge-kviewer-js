(function () {
  const TARGETS = [
    {
      selector: "span.text-xs.font-bold",
      original: "メニュー",
      replaceWith: "Menu"
    },
    {
      selector: "div", // 詳細ボタンはdivタグ内に直接ある
      original: "詳細",
      replaceWith: "Lihat Detail"
    },
    {
      selector: "span.text-xs.font-bold",
      original: "並べ替え",
      replaceWith: "Urutkan"
    }
  ];

  function replaceLabels() {
    TARGETS.forEach(({ selector, original, replaceWith }) => {
      document.querySelectorAll(selector).forEach((el) => {
        if (el.textContent.trim() === original) {
          el.textContent = replaceWith;
        }
      });
    });
  }

  // 粘り強く監視（最大30秒）
  const interval = setInterval(() => {
    replaceLabels();
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
  }, 30000); // 30秒で打ち切り

  // MutationObserverでも監視
  const observer = new MutationObserver(() => {
    replaceLabels();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
