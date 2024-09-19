function calculateRectangleArea() {
  // rectangle width value
  const widthFiled = document.getElementById("rectangle-width");
  const widthValue = widthFiled.value;
  const width = parseFloat(widthValue);

  // rectangle length value
  const lengthFiled = document.getElementById("rectangle-length");
  const lengthValue = lengthFiled.value;
  const length = parseFloat(lengthValue);
  

  // rectangle area
  const rectangleArea = width * length;
  
  // display rectangle result
  const rectangleAreaResult = document.getElementById("rectangle-area");
  rectangleAreaResult.innerText = rectangleArea;
  
}