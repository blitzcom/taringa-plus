export const boldTag = (text) => {
  return text.replace(
    /\[b\]([^]*?)\[\/b\]/ig,
    '<strong>$1</strong>'
  )
}

export const emTag = (text) => {
  return text.replace(
    /\[i\]([^]*?)\[\/i\]/ig,
    '<em>$1</em>'
  )
}

export const sizeTag = (text) => {
  return text.replace(
    /\[size=([0-9]+?)\]([^]*?)\[\/size\]/ig,
    '<span style="font-size: $1pt;">$2</span>'
  )
}

export const imgTag = (text) => {
  return text.replace(
    /\[img\]([^]*?)\[\/img\]/ig,
    '<img class="reader-img" src="$1"/>'
  )
}

export const imgInlineTag = (text) => {
  return text.replace(
    /\[img=(.+?)\]/ig,
    '<img class="reader-img" src="$1"/>'
  )
}

export const alignTag = (text) => {
  return text.replace(
    /\[align=(.+?)\]([^]*?)\[\/align\]/ig,
    '<div style="text-align: $1;">$2</div>'
  )
}

export const linebrakeTag = (text) => {
  return text.replace(
    /\n/ig,
    '<br/>'
  )
}

export const colorTag = (text) => {
  return text.replace(
    /\[color=(#[0-9a-f]*?)\]([^]*?)\[\/color\]/ig,
    '<span style="color: $1;">$2</span>'
  )
}

export const anchorTag = (text) => {
  return text.replace(
    /\[url=(.*?)\]([^]*?)\[\/url\]/ig,
    '<a href="$1" target="_blank">$2</a>'
  )
}

export const listTag = (text) => {
  return text.replace(
    /\[list\]([^]*?)\[\/list\]/ig,
    '<ul>$1</ul>'
  )
}

export const listItemTag = (text) => {
  return text.replace(
    /\[\*\]([^]*?)\n/ig,
    '<li>$1</li>'
  )
}

class BBCodeParser {
  constructor(tags) {
    this.tags = tags || []
  }

  reducer (existing, processor) {
    if (processor) {
      return processor(existing || '')
    } else {
      return existing
    }
  }

  parse (text) {
    return this.tags.reduce(this.reducer, text)
  }
}

const tags = [
  boldTag,
  emTag,
  sizeTag,
  imgTag,
  imgInlineTag,
  alignTag,
  colorTag,
  anchorTag,
  listTag,
  listItemTag,
  linebrakeTag
]

export const toHTML = (text) => {
  return (new BBCodeParser(tags)).parse(text)
}

export const commentToHTML = (text) => {
  return (new BBCodeParser([imgInlineTag])).parse(text)
}
