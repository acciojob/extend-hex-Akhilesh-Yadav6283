const extendHex = (shortHex) => {
  // write your code here
	  shortHex = shortHex.replace('#', '');

  // Split the shortHex into individual color components
  const red = shortHex.charAt(0);
  const green = shortHex.charAt(1);
  const blue = shortHex.charAt(2);

  // Extend each color component to two characters
  const fullHex =
    red + red +
    green + green +
    blue + blue;

  // Add the '#' symbol and return the full hex code
  return '#' + fullHex.toUpperCase();

};

// Do not change the code below. 
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
