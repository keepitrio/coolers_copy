function makeGrid(col) {
  var output = "<div class = 'wrapper'>";

    for (var i = 0; i < 5; i++) {
      output += "<div class= 'col'>";
      output += "</div>"
    }
  return output;
}

document.body.intterHTML = makeGrid(4);