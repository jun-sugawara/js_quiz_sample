// 問題と選択肢、回答を用意して関数に入れる
const quiz = [{
  question: 'ドラえもんの身長は次のうちどれ？',
  answers: ['129.3㎝',
            '128.3㎝',
            '127.3㎝',
            '126.3㎝'],
  correct: '129.3㎝'
  },{
  question: '次のうち赤いのは？',
  answers: ['きゅうり',
            'レモン',
            'りんご',
            'ビール'],
  correct: 'りんご'
  },{
  question: '次の映画のうち公開が最も早い映画は？',
  answers: ['電撃！ブタのヒヅメ大作戦',
            '嵐を呼ぶジャングル',
            'モーレツ！オトナ帝国の逆襲',
            '探偵たちの鎮魂歌'],
  correct: '電撃！ブタのヒヅメ大作戦'
  }
];

// 問題数を定義
const quizLength = quiz.length;
let quizIndex = 0;
let result = 0;

// 回答のボタンを定義
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 問題文と選択肢を定義
const setupQuiz = () => {
  // 問題文
  document.getElementById('js-question').textContent = quiz[quizIndex].question;  
  // 回答
  let buttonIndex = 0;  
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
    buttonIndex++;
  }
}
setupQuiz();

// 回答クリック時の動きを関数に入れる
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！')
    result ++;
  }else {
    window.alert('不正解')
  }
  quizIndex ++;
  if (quizIndex < quizLength) {
    // 問題数があれば次の問題を呼ぶ
    setupQuiz();
  } else {
    // 問題がなくなったら実行
    window.alert('終了！あなたの正解数は' + result + '/' + quizLength + 'です！お疲れ様でした！')
    location.reload();
  }
}

// 回答の動作の実行
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });  
  handlerIndex ++;
}

