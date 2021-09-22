let counter = document.querySelector("#counter");
let minusBttn = document.querySelector("#minus");
let plusBttn = document.querySelector("#plus");
let heartBttn = document.querySelector("#heart");
let pauseBttn = document.querySelector("#pause");
let likesDisplayed = document.querySelector(".likes");
let submitBttn = document.querySelector("#submit");
let counterLikes = 0;

function timer() {
  let a = parseInt(counter.textContent);
  counterLikes = 0;
  return (counter.textContent = a + 1);
}

let timerInterval = setInterval(timer, 1000);

minusBttn.addEventListener("click", counterDecrement);
plusBttn.addEventListener("click", counterIncrement);
heartBttn.addEventListener("click", numLiker);
pauseBttn.addEventListener("click", pauseResume);
submitBttn.addEventListener("click", submitCom);

function counterDecrement() {
  let a = parseInt(counter.textContent);
  return (counter.textContent = a - 1);
}

function counterIncrement() {
  let a = parseInt(counter.textContent);
  return (counter.textContent = a + 1);
}

function numLiker() {
  let num = counter.innerHTML;
  let list = document.createElement("li");
  counterLikes += 1;
  list.innerText = `${num} has been liked ${counterLikes} times`;

  likesDisplayed.append(list);
}

function pauseResume() {
  if (pauseBttn.textContent.trim() === "pause") {
    clearInterval(timerInterval);
    pauseBttn.textContent = "Resume";
  } else {
    timerInterval = setInterval(timer, 1000);
    pauseBttn.textContent = "pause";
  }
  console.log(pauseBttn.textContent);
}

function submitCom(e) {
  e.preventDefault();
  let formInput = document.querySelector("#comment-input").value;
  let commentList = document.querySelector("#list");
  let newField = document.createElement("li");
  newField.innerText = formInput;
  commentList.append(newField);
}
