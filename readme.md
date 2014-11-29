# micromark

micro templating with markdown

- es6 template string interpolation syntax
- markdown syntax otherwise
- based on commonmark and lodash

```
var micromark = require('micromark')
  , tmpl = "the *quick* brown _fox_ says hello ${name}!"
  , person = {name:'nick'}

// get the html
console.log(micromark(tmpl, person))

// return a template compiler
var compiled = micromark(tmpl)

console.log(compiled({name:'zooey'}))
console.log(compiled({name:'schmidt'}))

```
