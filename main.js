window.onload = function() {

  // クリックコピー
  const copyButtons = document.querySelectorAll('.copy_button');
  const copyTexts = document.querySelectorAll('.copy_text');
  const checks = document.querySelectorAll('.check');

  // ボタンごとにクリックイベントを設定
  copyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const textToCopy = copyTexts[index].textContent; // 対応するテキストを取得

      // クリップボードにコピー
      navigator.clipboard.writeText(textToCopy).then(() => {
        checks[index].classList.add('panda_animate');
        checks[index].style.opacity = '1';
        setTimeout(() => {
          checks[index].classList.remove('panda_animate');
          checks[index].style.opacity = '0';
        }, 700);
      }).catch(err => {
        console.error('コピーに失敗しました', err);  // エラーハンドリング
      });
    });
  });
}