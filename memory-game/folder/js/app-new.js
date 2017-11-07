/*
 * Create a list that holds all of your cards
 */

//创建一个列表存储所有卡片
var cards = new Array();
var symbol = document.getElementsByClassName("symbol");
for (var i = 0; i < 16; i++) {
  var random = symbol[i].getAttribute("class");
  cards.push(random);
}
console.log(cards)

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 *
 */

/* Shuffle function from http://stackoverflow.com/a/2450976
 */

//洗牌函数
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
shuffle((cards));



//每次刷新页面用乱序后的数组元素替换html原始元素
function replaceCard() {
  for (var i = 0; i < cards.length; i++) {
    var replace = document.getElementsByClassName("symbol")[i];
    replace.setAttribute("class", cards[i]);
  }
}
replaceCard()

//点击第一次卡片变成蓝色并计算得分
var deck = document.getElementsByClassName("deck")[0];
var moves=document.getElementsByClassName("moves")[0];
var count=0;
var openedCard=[];
function handel(ev){
  var target = ev.target;
  if(target.nodeName.toLowerCase()==="li"){
    target.setAttribute("class","card open show");
    count+=1;
    moves.innerHTML=count;
  }
  var children=target.children;
  openedCard.push(children)
}
console.log(openedCard)
deck.addEventListener("click",handel,false)





/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)


 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)


 *  - if the list already has another card, check to see if the two cards match


 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)


 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
