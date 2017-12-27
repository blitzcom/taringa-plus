import * as parser from '../BBCodeParser'

describe('Tags', () => {
  it('parses [b]', () => {
    const expected = '[b]foobar[/b]'
    const actual = '<strong>foobar</strong>'

    expect(parser.boldTag(expected)).toEqual(actual)
  })

  it('parses [i]', () => {
    const expected = '[i]foobar[/i]'
    const actual = '<em>foobar</em>'

    expect(parser.emTag(expected)).toEqual(actual)
  })

  it('parses [size]', () => {
    const expected = '[size=18]foobar[/size]'
    const actual = '<span style="font-size: 18pt;">foobar</span>'

    expect(parser.sizeTag(expected)).toEqual(actual)
  })

  it('parses [img]src[/img]', () => {
    const expected = '[img]foobar[/img]'
    const actual = '<img class="reader-img" src="foobar"/>'

    expect(parser.imgTag(expected)).toEqual(actual)
  })

  it('parses [img=src]', () => {
    const expected = '[img=foobar]'
    const actual = '<img class="reader-img" src="foobar"/>'

    expect(parser.imgInlineTag(expected)).toEqual(actual)
  })

  it('parses [align=direction]', () => {
    const expected = '[align=foo]bar[/align]'
    const actual = '<div style="text-align: foo;">bar</div>'

    expect(parser.alignTag(expected)).toEqual(actual)
  })

  it('parses \\n', () => {
    const expected = '\n\n'
    const actual = '<br/><br/>'

    expect(parser.linebrakeTag(expected)).toEqual(actual)
  })

  it('parses [color]', () => {
    const expected = '[color=#333]foobar[/color]'
    const actual = '<span style="color: #333;">foobar</span>'

    expect(parser.colorTag(expected)).toEqual(actual)
  })

  it('parses [a]', () => {
    const expected = '[url=foo]bar[/url]'
    const actual = '<a href="foo" target="_blank">bar</a>'

    expect(parser.anchorTag(expected)).toEqual(actual)
  })

  it('parses [list]', () => {
    const expected = '[list]foobar[/list]'
    const actual = '<ul>foobar</ul>'

    expect(parser.listTag(expected)).toEqual(actual)
  })

  it('parses list item', () => {
    const expected = '[*]foobar\n'
    const actual = '<li>foobar</li>'

    expect(parser.listItemTag(expected)).toEqual(actual)
  })
})

describe('BBCodeParser', () => {
  it('parses bbcode', () => {
    const expected = '[b][i]foobar[/i][/b]'
    const actual = '<strong><em>foobar</em></strong>'

    expect(parser.toHTML(expected)).toEqual(actual)
  })
})
