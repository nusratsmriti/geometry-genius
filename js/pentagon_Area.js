function calculatePentagonArea() {
  // get base value
  const baseFiled = document.getElementById("pentagon-base");
  const baseValue = baseFiled.value;
  const base = parseFloat(baseValue);

  // get height value
  const heightFiled = document.getElementById("pentagon-height");
  const heightValue = heightFiled.value;
  const height = parseFloat(heightValue);

  //pentagon area
  const pentagonArea = 0.5 * base * height;
  

  // display pentagon area
  const pentagonAreaSpan = document.getElementById("pentagon-area");
  pentagonAreaSpan.innerText = pentagonArea;
};
