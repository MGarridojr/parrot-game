function flipCard(card) {
    const cardId = parseInt(card.id.replace("card", ""), 10);

    if(CanFlip[cardId] && CanSelect) {
        CanFlip[cardId] = false;
        Compare.push(cardId);

        Moves++;
        if(Moves == 1) {
            startTime();    
        }
        
        updateMoves();
        flip(card);

        if(Compare.length == 2) {
            CanSelect = false;
            setTimeout(function(){compareCards()},  1000);
        }
    }
}  

function compareCards() {
    if (Indexs[Compare[0]] == Indexs[Compare[1]]) {
        for (let i = 0; i < 2; i++) {
            card = document.querySelector("#card" + Compare[i]);
            card.querySelector(".front").classList.add("found");
        }
        validateEndGame();
    } else {
        for (let i = 0; i < 2; i++) {
            CanFlip[Compare[i]] = true;
            var card = document.querySelector("#card" + Compare[i]);
            flip(card);
        }
    }
    Compare = [];
    CanSelect = true;
}

function flip(card) {
    card.querySelector(".back").classList.toggle("flip");
    card.querySelector(".front").classList.toggle("flip");
}

function validateEndGame() {
    for (let i = 0; i < CanFlip.length; i++) {
        if (CanFlip[i]) {
            return;
        }
    }

    GameOver = true;

    stopTime();

    setTimeout(function(){endGame()}, 500);
}

function endGame() {
    alert("Parabens! Você ganhou em " + Moves + " jogadas e em " + strEndGameMsg());

    var restart = "";
    while (restart !== "s" && restart !== "S" && restart !== "n" && restart !== "N") {
        restart = prompt("Deseja jogar novamente? (s ou n)");
    }

    if (restart == "s" || restart == "S") {
        start();
    }
}