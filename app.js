// 問題の定義
const question = 'ドラえもんの身長は次のうちどれ？';
// 選択肢を４つ用意
const answers = ['129.3㎝',
                 '128.3㎝',
                 '127.3㎝',
                 '126.3㎝']
// 定数を用意（回答,ボタンの取得,ボタンの個数の取得）
const correct = '129.3㎝'
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 問題文と選択肢を定義
const setupQuiz = () => {
  // 問題文
  document.getElementById('js-question').textContent = question;  
  // 回答
  let buttonIndex = 0;  
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex]
    buttonIndex++;
  }
}
setupQuiz();

// 回答クリック時の動きを関数に入れる
const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！')
  }else {
    window.alert('不正解')
  }
}

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });  
  handlerIndex ++;
}

