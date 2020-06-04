
function el (tagName, properties, children) {
  this.renderString = ''
  // start tag
  var startStr = `<${tagName} ${genProperties(properties)}>`
  var childrenStr = ``
  if (children && children.length > 0) {
    children.map((v, k) => {
      if (typeof v === 'string') {
        childrenStr += v
      } else if (typeof v.render === 'function'){
        childrenStr += v.render()
      }
    })
  }
  var endStr = `</${tagName}>`
  this.renderString = startStr + childrenStr + endStr
  return {
    render: function () {
      return this.renderString
    },
    renderString: this.renderString
  }
}

function genProperties (properties) {
  let propertiesStr = ''
  Object.keys(properties).forEach(key => {
    if (properties.hasOwnProperty(key)) {
      propertiesStr += `${key}='${properties[key]}' `
    }
  })
  return propertiesStr
}

const ul = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item' }, ['Item 2']),
  el('li', { class: 'item' }, ['Item 3'])
])

const ulRoot = ul.render()
console.log(ulRoot)
