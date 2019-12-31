
import color from '../lib/color';
console.log(color);

const colors = color.getGradientColorsByValues({
  start: {
    red: 0,
    green: 0,
    blue: 0
  },
  end: {
    red: 255,
    green: 255,
    blue: 255
  },
  values: [10, 5]
});
console.log(colors);
