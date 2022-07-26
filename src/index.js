const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "     ": " ",
};

function decode(expr) {
  let arr = expr.split("");

  const size = 10;
  let slovo = [];
  let bukvi = [];
  let bukva = [];
  let element = [];

  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    bukvi[i] = arr.slice(i * size, i * size + size);
  }

  bukva = bukvi.map((value, index) => {
    let wasOne = false;
    return value.filter((subvalue, subinex) => {
      if (subvalue == 0 && !wasOne) {
        return false;
      } else {
        wasOne = true;
        return true;
      }
    });
  });
  bukva.forEach((value, index) => {
    let str = "";
    for (let i = 0; i < value.length; i = i + 2) {
      if (value[i] === "1" && value[i + 1] === "0") {
        str += ".";
      } else if (value[i] === "1" && value[i + 1] === "1") {
        str += "-";
      } else {
        str += " ";
      }
    }
    element.push(str);
  });

  slovo = element.map((value) => {
    let leter = MORSE_TABLE[value];
    return leter;
  });
  const result = slovo.join("");
  return result;
}

module.exports = {
  decode,
};
