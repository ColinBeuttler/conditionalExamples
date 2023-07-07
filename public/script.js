const items = document.getElementsByClassName("sub");

const text = document.querySelector(".text");
const button = document.querySelector(".button");

const textExplain = [
    "BankCorp, a fictional bank, uses software to check for fraudulent charges.",
    "There are two things BankCorp looks for to determing if an action is fradulent, amount and location.",
    "If a large amount of money is taken out in one transaction, this will alert the bank and accoutn holder of fraud.",
    "BankCorp's software uses conditionals before approving new transactions, a conditional checks for truthiness of a statement.",
    "In Java, the language BankCorp's software uses, conditionals will appear as 'if' statements. This checks if amount is less than or equal to 5000.",
    "This transaction will return true since the amount is equal to the transaction limit set by BankCorp's software.",
    "The second indication of fraud BankCorp checks for is the amount of time need to travel between locations of consecutive transactions and time between the transaction timestamp.",
    "if city1 is x amount of miles from city2 and it takes x time to travel x miles, x time is then compared to y, time between consecutive transactions.",
    "For the transaction to be approve by the bank then y must be greater than x or the transaction will be flagged as fraudulent.",
   "Only when both of these conditional statemnents are met will BankCorp approve a trasnaction."
]

let textIndex = 0;

button.onclick = function () { setText() };

function setText() {
    if (textIndex >= textExplain.length) {
        return 
    }
    else if (textIndex >= 5 && textIndex < 9) {
        iterate();
    }
    text.innerHTML = textExplain[textIndex];
    textIndex++;
}

function iterate() {
    switch(textIndex) {
        case 4:
            items[0].style = "display:flex";
            break;
        case 5:
            items[0].style = "display:flex";
            items[1].style = "display:flex";
            break;
        case 6:
            items[0].style = "display:none";
            items[1].style = "display:none";
            items[2].style = "display:flex";
            break;
        case 7:
            items[3].style = "display:flex";
            items[4].style = "display:flex";
            break;
        case 8:
            items[5].style = "display:flex";
            break;
    }
}

setText();