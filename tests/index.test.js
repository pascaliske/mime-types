import test from 'ava'
import { getType, getExtension } from '../dist'

test('return correct mime type for extension', async t => {
    const expected = 'text/plain'
    const result = getType('txt')

    t.is(result, expected)
})

test('return correct extension for mime type', async t => {
    const expected = 'txt'
    const result = getExtension('text/plain')

    t.is(result, expected)
})
