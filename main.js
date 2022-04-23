const name = document.getElementById("name");
const age = document.getElementById("age");
const from = document.getElementById("from");
const profileDt = document.getElementById("from");
const nameJs = document.getElementById("name_js");
const ageJs = document.getElementById("age_js");
const fromJs = document.getElementById("from_js");
const answer = document.getElementById("img");

const ans = document.getElementById("ans");

let num = 0;

name.onmouseenter = function () {
  nameJs.textContent = "角本 和史\
       すみって呼んでください ";
};

name.onmouseleave = function () {
  nameJs.textContent = "name:";
};

age.onmouseenter = function () {
  ageJs.textContent = "20歳 誕生日2月9日";
};

age.onmouseleave = function () {
  ageJs.textContent = "age:";
};

from.onmouseenter = function () {
  fromJs.textContent = "千葉県千葉市 → 船橋市 ";
};

from.onmouseleave = function () {
  fromJs.textContent = "from:";
};

answer.onclick = function () {
  if (num == 1) {
    answer.src = "team12.png";
    ans.textContent = "正解は？？";
    num = 0;
  } else {
    answer.src = "swallows.png";
    ans.textContent = "ヤクルトスワローズでした";
    num += 1;
  }
};
