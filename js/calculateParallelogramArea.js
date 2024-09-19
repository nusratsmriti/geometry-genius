function calculateParallelogramArea() {
  // get base value
  const baseFiled = document.getElementById("parallelogram-base");
  const baseValue = baseFiled.value;
  const base = parseFloat(baseValue);

  // get height value
  const heightFiled = document.getElementById("parallelogram-height");
  const heightValue = heightFiled.value;
  const height = parseFloat(heightValue);

  // triangle area
  const parallelogramArea =  base * height;
  

  // display triangle area
  const parallelogramAreaSpan = document.getElementById("parallelogram-area");
  parallelogramAreaSpan.innerText = parallelogramArea;
}