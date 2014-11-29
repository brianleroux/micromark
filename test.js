var test = require('tape')
  , src = "value of *bar* variable is ${ bar }"
  , data = {'bar':'hello world'}
  , compile = require('./')

test('exists', function(t) {
  t.ok(compile, 'there is a compile')
  t.end()
})

test('compiles', function(t) {
  var html = compile(src, data)
  console.log(html)
  t.ok(html, 'does a compile')
  t.end()
})
