function calculateEllipseArea() {
  //ellipse width value
  const widthFiled = document.getElementById("ellipse-a");
  const widthValue = widthFiled.value;
  const width = parseFloat(widthValue);

  // ellipse length value
  const lengthFiled = document.getElementById("ellipse-b");
  const lengthValue = lengthFiled.value;
  const length = parseFloat(lengthValue);

  // ellipse area
  const ellipseArea = 3.1416*width * length;

  // display ellipse result
  const ellipseAreaResult = document.getElementById("ellipse-area");
  ellipseAreaResult.innerText = ellipseArea;
}