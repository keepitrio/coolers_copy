/* Action items:
 1. Make a text file with all of the colors you want,
   in order of the 5 colors that will appear on screen.
   In JS, you'll slice by every 5 colors and assign them to arrays.
 2. Write a function where clicking on space will take a new array of colors
   and assign them to each panel.
*/

var moreButton = document.getElementById('more')
moreButton.onclick = function showDiv() {
  //will open more menu
  var dropdown = document.getElementById('dropdown');
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
}



// Create H1 element
var colorOne = document.getElementById('color_1');
colorOne = document.createElement("H1")
// Create where the text node would go

var t = document.createTextNode()
h.appendChild(t);
// Create p element
// Create where the text node would go
// Grab HEX code and color name from arrays, randomly.

var colors = [
  [
    { name: 'MAASTRICHT BLUE', color: '#011936' }
    { name: 'INDEPENDENCE', color: '#465362' }
    { name: 'WELDON BLUE', color: '#82A3A1' }
    { name: 'DARK SEA GREEN', color: '#9FC490' }
    { name: 'GRANNY SMITH APPLE', color: '#C0DFA1' }
  ],
  [
    { name: 'MAASTRICHT BLUE', color: '#0A2239' }
    { name: 'CAROLINA BLUE', color: '#53A2BE' }
    { name: 'CYAN CORNFLOWER BLUE', color: '#1D84B5' }
    { name: 'MEDIUM JUNGLE GREEN', color: '#132E32' }
    { name: 'BLUE SAPPHIRE', color: '#176087' }
  ],
  [
    { name: 'YANKEES BLUE', color: '#231942' }
    { name: 'PURPLE NAVY', color: '#5E548E' }
    { name: 'AFRICAN VIOLET', color: '#9F86C0' }
    { name: 'PASTEL VIOLET', color: '#BE95C4' }
    { name: 'PINK LAVENDER', color: '#E0B1CB' }
  ],
  [
    { name: 'TEAL', color: '#0E7C7B' }
    { name: 'TIFFANY BLUE', color: '#17BEBB' }
    { name: 'AERO BLUE', color: '#D4F4DD' }
    { name: 'RUSTY RED', color: '#D62246' }
    { name: 'DARK PUCE', color: '#4B1D3F' }
  ],
  [
    { name: 'MSU GREEN', color: '#104547' }
    { name: "DAVY'S GREY", color: '#4B5358' }
    { name: 'NICKEL', color: '#727072' }
    { name: 'LILAC LUSTER', color: '#AF929D' }
    { name: 'SOAP', color: '#D2D6EF' }
  ],
  [
    { name: 'BAZAAR', color: '#987284' }
    { name: 'LAVENDER GRAY', color: '#C2D3CD' }
    { name: 'DARK SKY BLUE', color: '#96C3CE' }
    { name: 'GLOSSY GRAPE', color: '#A79AB2' }
    { name: 'CHAMPAGNE PINK', color: '#F2DFD7' }
  ]
]