//подтверждение
var confirmation = function () {
  var confirmation = confirm("Сыграем в Виселицу ?");
  if (Boolean(confirmation)) {
    return true;
  }
};
// debugger;
//выбор слова
var pickWord = function () {
  var words = ["какашка", "оладушек", "клавиатура"];
  var randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
};
//подмена букв на "_"
var setupAnswerLetters = function () {
  var answerLetters = [];
  for (var i = 0; i < randomWord.length; i++) {
    answerLetters[i] = "_";
  }
  return answerLetters;
};
//прогресс
var showPlayerProgress = function () {
  alert(answerLetters.join(" "));
};
//вызвать слово
var getGuess = function () {
  guess = prompt("Выбери любую букву :)");
  return guess;
};
//обновить состояние игры
var updateGameState = function (guess, randomWord, answerLetters) {
  for (var j = 0; j < randomWord.length; j++) {
    if (randomWord[j] == guess) {
      if (answerLetters[j] !== "_") {
        alert("эй, буква уже угадана :p");
        break;
      } else {
        answerLetters[j] = guess;
        remainingLetters--;
      }
    }
  }
  return remainingLetters;
};
//функция и массив с неправильными буквами
var numberOfGuesses = function (guess) {
  if (guessContainer.indexOf(guess) === -1) {
    guessContainer.push(guess);
  }
  if (guessContainer.length === 4) {
    alert("У тебя осталось три попытки :)");
  } else if (guessContainer.length === 5) {
    alert("У тебя осталось две попытки, подумай хорошенько :|");
  } else if (guessContainer.length === 6) {
    alert("У тебя осталась одна попытка...");
  }
  return guessContainer;
};

//финал
var showAnswerAndCongratulatePlayer = function (remainingLetters) {
  if (remainingLetters == 0) {
    alert(
      "Ты " + answerLetters.join("") + " ! Молодец уделал меня на сей раз :)"
    );
  } else if (guessContainer.length === 7) {
    alert("Ты проиграл :(");
  }
};
var guessContainer = [];
var count = 0;
var randomWord = pickWord();
var answerLetters = setupAnswerLetters(randomWord);
var remainingLetters = randomWord.length;
//основной цикл игры
debugger;
while (remainingLetters > 0 && guessContainer.length < 7) {
  showPlayerProgress(answerLetters);
  var guess = getGuess();
  if (!guess) {
    break;
  } else if (guess == guess.toUpperCase() || guess == Boolean(Number(guess))) {
    guess = guess.toLowerCase();
    alert("нельзя вводить цифры, ;)");
  } else if (guess.length > 1) {
    alert("Ты не можешь вводить больше одной буквы, стоп стоп");
  } else {
    for (var i = 0; i < randomWord.length; i++) {
      if (randomWord.indexOf(guess) === -1) {
        numberOfGuesses(guess);
        break;
      } else if (randomWord.indexOf(guess) !== -1) {
        updateGameState(guess, randomWord, answerLetters);
        break;
      }
    }
  }
}
//конец игры
showAnswerAndCongratulatePlayer(remainingLetters);
