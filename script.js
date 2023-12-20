function userChoice(choice) {
    let choices = ["Таш","Кайчы","Кагаз"];
    let computerChoice = choices[Math.floor(Math.random()* 3)];

    let result = getResult(choice, computerChoice);

    document.getElementById('result').innerText = `сиз: ${choice} тандадыныз. компьютер : ${computerChoice} тандады. ${result}`;
}

function getResult(user, computer) {
    if (user === computer) {
        return "бирдей!";
    } else if (
        (user === "Таш" && computer === "Кайчы") ||
        (user === "Кайчы" && computer === "Кагаз") ||
        (user === "Кагаз" && computer === "Таш")
    ) {
        return "сиз уттунуз))!";
    } else {
        return "сиз утулдунуз((!";
    }
}

