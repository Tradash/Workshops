/*
Implement a custom markdown operator that will translate all text between
`@@...@@` and into `<blink>...</blink>` tags.

For example, `@@whatever@@` becomes `<blink>whatever</blink>`.

In addition to the `@@...@@` operator, your code should support existing markdown
syntax, including inside `@@...@@` operators.

Your code should accept a string of markdown as input and return a string of
html output. Here's a template that you can use:

  module.exports = function (str) {
    /* return html string *
  }

For this task, use the `marked` module: `npm install marked`

To verify your solution, run:

  regex-adventure verify solution.js

*/

const marked = require('marked');
module.exports = function (str) {
	const md = marked(str);
	console.log(str, md);

    return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>');

};

//console.log('beep boop');
