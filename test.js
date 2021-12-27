import * as btss from "./btss.js";

const colors = "blink grey underline hidden reverse bold"
const fg = "black red yellow blue green magenta cyan white crimson"

for(const fun of colors.split(" "))
  test(fun);

for(const fun of fg.split(" "))
  test(fun);

for(const fun of fg.split(" "))
  test("bg"+fun);

function test(fun) {
  console.log(btss[fun]("Ayushman Tripathy"));
}
