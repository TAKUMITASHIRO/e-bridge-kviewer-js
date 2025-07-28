(function () {
    const ORIGINAL_TEXT = "詳細";
    const REPLACEMENT_TEXT = "Lihat Detail";
  
    function replaceDetailText() {
      document.querySelectorAll("span").forEach((el) => {
        if (el.textContent && el.textContent.trim() === ORIGINAL_TEXT) {
          el.textContent = REPLACEMENT_TEXT;
        }
      });
    }
  
    // 初回実行
    document.addEventListener("DOMContentLoaded", () => {
      replaceDetailText();
  
      // DOM変化を監視して置換し続ける
      const observer = new MutationObserver(() => {
        replaceDetailText();
      });
  
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  })();
  