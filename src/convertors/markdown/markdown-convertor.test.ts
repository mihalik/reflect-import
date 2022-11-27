import {MarkdownConvertor} from './markdown-convertor'
import {describe, it, expect} from 'vitest'

describe('convert', () => {
  it('converts markdown to HTML', () => {
    const convertor = new MarkdownConvertor({graphId: '123'})
    const {notes} = convertor.convert({data: '# foo', filename: 'foo.md'})
    const [{html}] = notes

    expect(html).toEqual('<h1>foo</h1>')
  })
})

describe('isDaily', () => {
  it('is true when filename is a date', () => {
    const convertor = new MarkdownConvertor({graphId: '123'})
    const {notes} = convertor.convert({data: '# foo', filename: '2020-10-10.md'})
    const [{dailyAt}] = notes

    expect(dailyAt).toEqual(1602288000000)
  })

  it('is false when filename is not a date', () => {
    const convertor = new MarkdownConvertor({graphId: '123'})
    const {notes} = convertor.convert({data: '# foo', filename: 'foo'})
    const [{dailyAt}] = notes

    expect(dailyAt).toBe(undefined)
  })
})
