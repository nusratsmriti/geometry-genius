function calculateTriangleArea() {
  // get base value
  const baseFiled = document.getElementById("triangle-base");
  const baseValue = baseFiled.value;
  const base = parseFloat(baseValue);

  // get height value 
  const heightFiled = document.getElementById("triangle-height");
  const heightValue = heightFiled.value;
  const height = parseFloat(heightValue);

  // triangle area 
  const triangleArea = 0.5 * base * height;
  console.log(triangleArea);

  // display triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = triangleArea;
}