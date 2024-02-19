'use strict'
// 1行目に記載している 'use strict' は削除しないでください



function arigator(){
    const count = parseInt(document.getElementById("text1").value)
    console.log(count)
 
    const display=document.getElementById("wani")
    
    for(let i =0; i<count; i++){
     display.innerText +="💪"
    }
 
 }

 function changeText1(element) {
    element.textContent = "🛁";
}

function resetText1(element) {
    element.textContent = "サウナ";
}

function changeText2(element) {
    element.textContent = "🦾";
}

function resetText2(element) {
    element.textContent = "筋トレ";
}

function getSelectedString() {
    const selectElement = document.getElementById('stringSelect');
    const selectedText = selectElement.options[selectElement.selectedIndex].text;
    console.log(selectedText)
    if(selectedText==="初心者"){
      const hp ="https://toyotajp.sharepoint.com/sites/msteams_0f9e66"
      const answer =document.getElementById("ans")
      answer.innerText =`こんにちは、${selectedText} ,あなたには${hp}がおすすめ`
    }
}





//プレゼント
//　できるようになったこと・
//　業務アプリのようなもの。ソフトウェアで簡単にユーザの使いやすさを追求すること。
//　活かせること。この先できるようになりたいこと。
//　学び

//自己紹介、注目、関心を引く議題
//技連長すぎ
//対応する文献は結局どこをみるのがいいのかわからない
//結局設備要件がいったいなんのか、基準条件が多すぎて、何を適用できるのかわからない
//
//デジタルの課題がある。

//仕事の継承の仕方に課題がある。
//基礎で学んだことが
//どう動いてほしいのか　DIGでキャリアを歩ませてほしい。
//

//ピッキング技連みるか。・・・長すぎ、、
//なんとか理解した。。他の人に制約を提示しよう
//資料はこれっと。
//担当者　　知りません。　
//僕　　（まじすか、読めって言ったやん。。）ちゃんと説明できてなかったですね。。とにかく、問題を解決しましょう。
//自分で調べてみようか。・・・
//ちゃんと説明してもらえないとわからない。
//（そんな時間ないんだけど）わかりました。僕がやっておきます。

