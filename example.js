var micromark = require('./')
  , tmpl = "the *quick* brown _fox_ says hello ${name}!"
  , data = {'name':'nick'}

// get the html
console.log(micromark(tmpl, data))

// return a template compiler
var compiled = micromark(tmpl)

console.log(compiled({name:'zooey'}))
console.log(compiled({name:'schmidt'}))

