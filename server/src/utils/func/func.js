const randomIndex = (arr) => {
  let arrIndex = [];
  let index = arr.length - 1;
  while (arrIndex.length < arr.length && arrIndex.length < 3) {
    index = Math.floor(Math.random() * arr.length);
    if (!arrIndex.includes(index)) {
      arrIndex.push(index);
    }
  }
  return arrIndex;
};
module.exports = { randomIndex };
