console.log('test');

var funFunFunction = function () {
  var theFunThing = prompt('What is funny?');
  console.log(theFunThing);
  var pTag = document.getElementById('funny');
  console.log(pTag);
  pTag.appendChild(document.createTextNode(theFunThing));
};
