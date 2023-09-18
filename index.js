const btn = document.getElementById('btn');

// ✅ Change button text on click
btn.addEventListener('click', function handleClick() {
  btn.textContent = 'SATURDAY 23-09-23 22:22';
});


// Function to parse URL parameters
function getUrlParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Function to update the text based on the selected person
function updateTextBasedOnId(id) {
  const textDisplay = document.getElementById('text-display');
  
  // Define text for each person
  const texts = {
    '598723': '',
    '146789': 'Mano',
    '284519': 'Thanasime',
    '329045': 'Billo',
    '835617': 'Chari',
    '502836': 'Mixali',
    '913245': 'Aristoteli',
    '765124': 'Izzo',
    '432651': 'Zoe',
    '109237': 'Stathi',
    '826471': 'Eirini',
    '902481': 'Vasia',
    '213905': 'Stavro',
    '512487': 'Margarita',
    '876512': 'Tsilo',
    '982164': 'Margarita',
    '762843': 'Xenia',
    '563210': 'Elisavet',
    '948120': 'Viktoria',
    '372941': 'Maria',
    '724890': 'Rozmari',
    '870912': 'Christie',
    '641982': 'Kalliopi',
    '312897': 'Eleni', //moug
    '918273': 'Kelly',
    '182736': 'Elena',
    '390417': 'Yian',
    '672349': 'Lefteri',
    '917384': 'Katerina',
    '872349': 'Eleni', //antz
    '510284': 'Angi',
    '713948': 'Eleni', //kesk
    '624187': 'Moschoula',
    '381964': 'Maria', //antz
    '892147': 'Irw1', //dmtr
    '571832': 'Irw2', //vgk
    '987123': 'Konstantina', //kol
    '613784': 'Nefeli', //krz
    '491726': 'Christina', //nkldk
    '128465': 'Olympia',
    '827164': 'Coolper' , 
    '562930': 'Lkpl' , 
    '340981': 'Nikola', //katsik
    '175920': 'Maria', //kov
    '837510': 'Panteli', //work
    '491625': 'Maria' //fltzn 
  };
  
  

  const selectedName = texts[id] || 'Agnoste';
  const formattedText = `<h2>${selectedName} you are invited !</h2>`;
  textDisplay.innerHTML = formattedText;
}

// Get the person ID from the URL parameter
const personId = getUrlParameter('id');

// Update the text based on the person ID
if (personId) {
  updateTextBasedOnId(personId);
} else {
  // Default behavior if no ID is provided
  updateTextBasedOnId('1');  // Default to Person 1 if no ID provided
}
