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
    '598723': '', // https://merk4.github.io/party/?id=598723
    '146789': 'Mano', // https://merk4.github.io/party/?id=146789
    '284519': 'Thanasime', // https://merk4.github.io/party/?id=284519
    '329045': 'Billo', // https://merk4.github.io/party/?id=329045
    '835617': 'Chari', // https://merk4.github.io/party/?id=835617
    '502836': 'Mixali', // https://merk4.github.io/party/?id=502836
    '913245': 'Aristoteli', // https://merk4.github.io/party/?id=913245
    '765124': 'Izzo', // https://merk4.github.io/party/?id=765124
    '432651': 'Zoe', // https://merk4.github.io/party/?id=432651
    '109237': 'Stathi', // https://merk4.github.io/party/?id=109237
    '826471': 'Eirini', // https://merk4.github.io/party/?id=826471
    '902481': 'Vasia', // https://merk4.github.io/party/?id=902481
    '213905': 'Stavro', // https://merk4.github.io/party/?id=213905
    '512487': 'Margarita', // https://merk4.github.io/party/?id=512487
    '876512': 'Tsilo', // https://merk4.github.io/party/?id=876512
    '982164': 'Margarita', // https://merk4.github.io/party/?id=982164
    '762843': 'Xenia', // https://merk4.github.io/party/?id=762843
    '563210': 'Elisavet', // https://merk4.github.io/party/?id=563210
    '948120': 'Viktoria', // https://merk4.github.io/party/?id=948120
    '372941': 'Maria', // https://merk4.github.io/party/?id=372941
    '724890': 'Rozmari', // https://merk4.github.io/party/?id=724890
    '870912': 'Christie', // https://merk4.github.io/party/?id=870912
    '641982': 'Kalliopi', // https://merk4.github.io/party/?id=641982
    '312897': 'Eleni', // https://merk4.github.io/party/?id=312897 (moug)
    '918273': 'Kelly', // https://merk4.github.io/party/?id=918273
    '182736': 'Elena', // https://merk4.github.io/party/?id=182736
    '390417': 'Yian', // https://merk4.github.io/party/?id=390417
    '672349': 'Lefteri', // https://merk4.github.io/party/?id=672349
    '917384': 'Katerina', // https://merk4.github.io/party/?id=917384
    '872349': 'Eleni', // https://merk4.github.io/party/?id=872349 (antz)
    '510284': 'Angi', // https://merk4.github.io/party/?id=510284
    '713948': 'Eleni', // https://merk4.github.io/party/?id=713948 (kesk)
    '624187': 'Moschoula', // https://merk4.github.io/party/?id=624187
    '381964': 'Maria', // https://merk4.github.io/party/?id=381964 (antz)
    '892147': 'Irw1', // https://merk4.github.io/party/?id=892147 (dmtr)
    '571832': 'Irw2', // https://merk4.github.io/party/?id=571832 (vgk)
    '987123': 'Konstantina', // https://merk4.github.io/party/?id=987123 (kol)
    '613784': 'Nefeli', // https://merk4.github.io/party/?id=613784 (krz)
    '491726': 'Christina', // https://merk4.github.io/party/?id=491726 (nkldk)
    '128465': 'Olympia', // https://merk4.github.io/party/?id=128465
    '827164': 'Coolper', // https://merk4.github.io/party/?id=827164
    '562930': 'Lkpl', // https://merk4.github.io/party/?id=562930
    '340981': 'Nikola', // https://merk4.github.io/party/?id=340981 (katsik)
    '175920': 'Maria', // https://merk4.github.io/party/?id=175920 (kov)
    '837510': 'Panteli', // https://merk4.github.io/party/?id=837510 (work)
    '491625': 'Maria', // https://merk4.github.io/party/?id=491625 (fltzn)
    '491622' : 'Markella', // https://merk4.github.io/party/?id=491622
    '340982' : 'Sofia', // https://merk4.github.io/party/?id=340982
    '340972' : 'Stelio', // https://merk4.github.io/party/?id=340972
    '341982' : 'Angela', // https://merk4.github.io/party/?id=341982
    '341922' : 'Natasa', // https://merk4.github.io/party/?id=341992,
    '241982' : 'Irida', // https://merk4.github.io/party/?id=241982
    '241912' : 'Kimon', // https://merk4.github.io/party/?id=241912
    '242912' : 'John', // https://merk4.github.io/party/?id=242912
    '12342' : 'Vicky', // https://merk4.github.io/party/?id=12342
    '123424' : 'Despoina', // https://merk4.github.io/party/?id=123424
    '831510': 'Saverina', // https://merk4.github.io/party/?id=831510
    '872341': 'Panagioti', // https://merk4.github.io/party/?id=872341
    '12332' : 'Alexandra' // https://merk4.github.io/party/?id=12332
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
