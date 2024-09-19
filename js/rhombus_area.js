function calculateRhombusArea() {
  // get base value
  const baseFiled = document.getElementById("rhombus-base");
  const baseValue = baseFiled.value;
  const base = parseFloat(baseValue);

  // get height value
  const heightFiled = document.getElementById("rhombus-height");
  const heightValue = heightFiled.value;
  const height = parseFloat(heightValue);

  //rhombus area
  const rhombusArea = 0.5 * base * height;
  console.log(rhombusArea);

  // display rhombus area
  const rhombusAreaSpan = document.getElementById("rhombus-area");
  rhombusAreaSpan.innerText = rhombusArea;
}