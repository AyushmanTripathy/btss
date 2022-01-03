# BTSS

#### Basic Terminal String Styling in <5kb

install - `npm i btss`

#### Text decorations

example -

```js
import { grey } from "btss";
grey("this text will be grey");
```
1. reset
1. bold
1. grey
1. underline
1. blink
1. reverse
1. hidden

#### Colors

these colors can be used as font color or background color
example -

```js
import { red, bgred } from "btss";

// red font color
red("text");

// red background color
bgred("text");
```
1.  black
1.  red
1.  green
1.  yellow
1.  blue
1.  magenta
1.  cyan
1.  white
1.  crimson
