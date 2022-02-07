function start() {
  Moves = 0;
  StartTime = 0;
  Time = 0;
  CanFlip = [];
  Compare = [];
  Indexs = [];
  GameOver = false;
  CanSelect = true;

  const qntCards = getQntCards();
  
  generateCards(qntCards);                

  updateMoves();
  updateTime();

  alignCards();
} 

function getQntCards() {
  let qntCards = 0;

  while (qntCards < 4 || qntCards > 14 || qntCards % 2 !== 0) {
    qntCards = prompt("Digite um número de cartas par entre 4 e 14");
    qntCards = parseInt(qntCards, 10);
  }

  return qntCards;
}

function generateCards(qntCards) {
  let cards = "";
  Indexs = getIndexs(qntCards);

  for (let i = 0; i < qntCards; i++) {
    cards += `
      <div id="card${i}" class="card" onclick="flipCard(this)">
        <div class="back appearance" data-identifier="back-face">
          <img src="imagens/back.png">
        </div>
        <div class="front appearance flip" data-identifier="front-face">
          <img src="imagens/front-${Indexs[i]}.gif">
        </div>
      </div>
      `;
  }

  let element = document.getElementById("cards");
  element.innerHTML = cards;
}

function getIndexs(qntCards) {
  let count = 0;
  for (let i = 0; i < qntCards/2; i ++) {
    Indexs.push(count);
    Indexs.push(count);
    CanFlip.push(true);
    CanFlip.push(true);
    count++; 
  }

  return Indexs.sort((a, b) => 0.5 - Math.random());
}