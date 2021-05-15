const rgbColors = ["(220,20,60)", "(255,140,0)", "(255,255,0)", "(124,252,0)", "(0,250,154)", "(0,0,255)", "(128,128,128)", "(0,128,128)", "(0,0,128)", "(0,0,0)", "(0,255,255)", "(123,104,238)", "(128,0,128)", "(138,43,226)", "(186,85,211)"];

const getRandomColors = () => {
  let nums = new Set();

  while (nums.size < 7) {
    let index = Math.floor(Math.random() * (rgbColors.length - 2 + 1) + 1);

    if (0 <= index <= 7) {
      nums.add(index);
    }
  }

  const outIndex = Math.floor(Math.random() * (7 - 1 + 1) + 1);
  return [outIndex, [...nums].map(idx => rgbColors[idx])];
};

export default getRandomColors;