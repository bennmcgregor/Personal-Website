//Custom color conversion functions cause ColorMix's don't work!
//taken from a stackoverflow post: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function colorToRgba(color) {
  var convert = "";
  //if the color is given in the form "rgb(x, y, z)"
  if (color.startsWith("rgb(")) {
    let red = color.substring(
      color.indexOf("(") + 1,
      color.indexOf(",")
    );
    let green = color.substring(
      color.indexOf(" ") + 1,
      color.lastIndexOf(",")
    );
    let blue = color.substring(
      color.lastIndexOf(" ") + 1,
      color.indexOf(")")
    );
    convert = "rgba("+red.toString()+", "+green.toString()+", "+blue.toString()+", 0)"
  } else {
    var c = hexToRgb(color);
    if (c) {
      convert = "rgba("+c.r.toString()+", "+c.g.toString()+", "+c.b.toString()+", 0)"
    } else {
      convert = color;
    }
  }
  return convert;
}

export {rgbToHex, hexToRgb, colorToRgba}
