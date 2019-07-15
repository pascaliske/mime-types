import expect from 'expect'
import { getType, getExtension, define } from '../src'

test('return correct mime type for extension', async () => {
    const expected = 'text/plain'
    const result = getType('txt')

    expect(result).toBe(expected)
})

test('return correct extension for mime type', async () => {
    const expected = 'txt'
    const result = getExtension('text/plain')

    expect(result).toBe(expected)
})

test('define additional mime types', async () => {
    define({ 'text/demo': ['demo'] })

    const expected = 'demo'
    const result = getExtension('text/demo')

    expect(result).toBe(expected)
})
