import clear from 'rollup-plugin-clear'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
import { module, main } from './package.json'

export default () => ({
    input: 'src/index.ts',
    output: [
        {
            format: 'cjs',
            file: main,
        },
        {
            format: 'es',
            file: module,
        },
    ],
    external: ['mime/Mime', 'mime/types/standard.json'],
    plugins: [
        clear({
            targets: ['dist'],
            watch: true,
        }),
        typescript({
            typescript: require('typescript'),
        }),
        json({
            compact: true,
        }),
        terser(),
    ],
})
