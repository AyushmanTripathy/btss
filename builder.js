const colours = {
  reset: "x1b[0m",
  bold: "x1b[1m",
  grey: "x1b[2m",
  underline: "x1b[4m",
  blink: "x1b[5m",
  reverse: "x1b[7m",
  hidden: "x1b[8m",
};

const fg = {
  black: "x1b[30m",
  red: "x1b[31m",
  green: "x1b[32m",
  yellow: "x1b[33m",
  blue: "x1b[34m",
  magenta: "x1b[35m",
  cyan: "x1b[36m",
  white: "x1b[37m",
  crimson: "x1b[38m",
};

const bg = {
  black: "x1b[40m",
  red: "x1b[41m",
  green: "x1b[42m",
  yellow: "x1b[43m",
  blue: "x1b[44m",
  magenta: "x1b[45m",
  cyan: "x1b[46m",
  white: "x1b[47m",
  crimson: "x1b[48m",
};

for (const color in colours) {
  console.log(
    "export function " +
      color +
      '(s){return "\\' +
      colours[color] +
      '"+s+' +
      '"\\' +
      colours["reset"] +
      '"}'
  );
}

for (const color in fg) {
  console.log(
    "export function " +
      color +
      '(s){return "\\' +
      fg[color] +
      '"+s+' +
      '"\\' +
      colours["reset"] +
      '"}'
  );
}

for (const color in bg) {
  console.log(
    "export function bg" +
      color +
      '(s){return "\\' +
      bg[color] +
      '"+s+' +
      '"\\' +
      colours["reset"] +
      '"}'
  );
}
