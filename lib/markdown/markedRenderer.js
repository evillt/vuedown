const marked = require('./marked')
const link = require('./rules/link')
const html = require('./rules/html')
const image = require('./rules/image')

module.exports = options => {
  const renderer = new marked.Renderer(options)

  link(renderer, options)

  html(renderer, options)

  image(renderer, options)

  return renderer
}
