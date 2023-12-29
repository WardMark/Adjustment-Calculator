function systemCalculate() {
  let number1 = parseFloat(document.getElementById('n1').value);
  let number2 = parseFloat(document.getElementById('n2').value);
  let adjT = (number1 + number2) * 0.005;
  let adjAG = (number1 + number2) * 0.0005;
  let adjAO = (adjAG * 128).toFixed(1);
  document.getElementById('systems').innerText = "A full hit of thickener is " + adjT.toFixed(2) + " ga.. One full amine hit is " + adjAO + " ounces.";
}

function systemReset() {
  document.getElementById('systems').innerText = '';
}

function toteCalculate() {
  let t = parseFloat(document.getElementById('tote').value);
  let toteT = t * 0.005;
  let toteA = t * 0.0005;
  let toteAO = (toteA * 128).toFixed(1);
  document.getElementById('toteDiv').innerText = "A full hit of thickener is " + toteT.toFixed(2) + " ga.. One full amine hit is " + toteAO + " ounces.";
}
 function toteReset() {
  document.getElementById('toteDiv').innerText = '';
 }
 