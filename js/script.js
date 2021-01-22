
const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

const powerValues = [1, 2 ,3, 4, 5]

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}


const cards = [{

  cardName: 'Grizzly Bears',

  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[2]   // 'B'
    ],
  },

  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',

  editionType: editions['BL'],

  description: 'Lorem ipsum',
  story: 'Naltro Lorem Ipsum',

  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
  }

  },
  {

  cardName: 'Sviluppatore guerriero',

  cost: {
    genericCostNumber: 3,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[2],
      fieldCodes[3]
    ],
  },

  picture: 'images/g.png',  // da inserire immagine
  cardType: cardTypes[3],
  cardObject: 'Umano',

  editionType: editions['BL'],

  description: 'Lo sviluppatore guerriero spezza i byte in bit!',
  story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

  score: {
    power: 5,  // r
    toughness: 3
  }

  },

  {

  cardName: 'Sirena canterina',

  cost: {
    genericCostNumber: 2,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],
      fieldCodes[1]
    ],
  },

  picture: 'images/g.png',  // da inserire immagine
  cardType: cardTypes[5],
  cardObject: 'Siren',

  editionType: editions['SP'],

  description: 'La sirena canterina ti ipnotizza col suo canto',
  story: 'La sirena canterina è una creatura mitologica.',

  score: {
    power: 1,  // r
    toughness: 5
  }

  },

  {

  cardName: 'Soldato leggendario',

  cost: {
    genericCostNumber: 4,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],
      fieldCodes[1]
    ],
  },

  picture: 'images/g.png',  // da inserire immagine
  cardType: cardTypes[3],
  cardObject: 'Umano',

  editionType: editions['BL'],

  description: 'Un soldato imbattibile che riesce ad abbattere interi eserciti',
  story: 'Il soldato leggendario è nato fortunato.',

  score: {
    power: 3,  // r
    toughness: 4
  }

  },

  {

  cardName: 'Kratos',

  cost: {
    genericCostNumber: 7,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[1],
      fieldCodes[3]
    ],
  },

  picture: 'images/g.png',  // da inserire immagine
  cardType: cardTypes[5],
  cardObject: 'Semidio',

  editionType: editions['SP'],

  description: 'Un guerriero potentissimo, figlio di Zeus. ',
  story: 'Non sa chi sia la madre, ma non gli interessa.',

  score: {
    power: 4,  // r
    toughness: 5
  }

  },
]

console.log(cards);

function filterByPower(powerValue, array) {
  return array.filter((element) => {
    return element.score.power === powerValue;
  });
}

function render(DOMElement, array) {
  const cardListHTML = document.getElementById(DOMElement)
  cardListHTML.innerHTML = '';
  array.forEach((element) => {
    cardListHTML.innerHTML += `<li> ${element.cardName} </li>`
  });
}

// html

render('listaCarte', cards)

function renderSelect(DOMElement, array) {
  const select = document.getElementById(DOMElement);

  array.forEach((element) => {
    select.innerHTML += `<option value=${element}"> ${element} </option>`
  });

}

renderSelect('powerSelect', powerValues)

$('#powerSelect').change(function () {
  const selectValue = parseInt($(this).val());
  console.log(selectValue);
  if (isNaN(selectValue)) {
    render('listaCarte', cards)
    return;
  };
  const filteredArray = filterByPower(selectValue, cards);
  render('listaCarte', filteredArray);
});
