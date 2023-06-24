const { texto, arquivos, html } = require('./base');

console.log(html.match(/<.+>.+<\/.+>/g)); // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // greedy