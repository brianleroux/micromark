var commonmark = require("commonmark")
  , reader = new commonmark.DocParser()
  , writer = new commonmark.HtmlRenderer()
  , template = require('lodash.template')

function toHTML(markdown) {
  return writer.render(reader.parse(markdown))
}

function compile() {
  
  var args = [].splice.call(arguments, 0)
    , src = args[0]
    , data = args[1]

  if (args.length === 1) {
    return function compiled(data) {
      return toHTML(template(src)(data))
    }
  }
  else if (args.length === 2) {
    var md = template(src)(data)
    return toHTML(md)
  }
  else {
    throw new Error('could not compile template')
  }
}

module.exports = compile
