const grid = document.querySelector('.grid')

const characters = [
  'arthur',
  'bill',
  'charles',
  'dutch',
  'hosea',
  'javier',
  'john',
  'lenny',
  'micah',
  'sadie',
]

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = ''
let secondCard = ''

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}

const revealCard = ({target}) => {
if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();

  }
}

const createCard = (character) => {

  const card = document.createElement('div', 'card')
  const front = document.createElement('div', 'face front')
  const back = document.createElement('div', 'face back')

front.style.backgroundImage = `url('../imagens/${character}.png)`

card.className = 'card';
front.className = 'face front';
back.className = 'face back';


card.appendChild(front);
card.appendChild(back);

card.addEventListener('click', revealCard)

return card;

}

const loadGame = () => {

  const duplicateCharacters = [...characters, ...characters];
  
  const shuffledArray = duplicateCharacters.sort(()=> Math.random()- 0.5);

  duplicateCharacters.forEach((character) => {
   const card = createCard(character);
   grid.appendChild(card);
  });
}

loadGame();