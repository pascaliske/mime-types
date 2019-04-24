import clear from 'rollup-plugin-clear'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { module, main, browser } from './package.json'

export default () => ({
    input: 'src/index.ts',
    output: [
        {
            format: 'es',
            file: module,
        },
        {
            format: 'cjs',
            file: main,
        },
        {
            format: 'umd',
            file: browser,
            name: 'mimeTypes',
            globals: {
                tslib: 'tslib',
                classnames: 'classNames',
            },
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
            tsconfigOverride: {
                exclude: ['rollup.config.ts'],
            },
            useTsconfigDeclarationDir: true,
        }),
        terser(),
    ],
})
