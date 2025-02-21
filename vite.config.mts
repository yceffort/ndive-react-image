import {babel} from '@rollup/plugin-babel'
import react from '@vitejs/plugin-react'
// import react from '@vitejs/plugin-react-swc'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import preserveDirectives from 'rollup-preserve-directives'
import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import pkg from './package.json'

const SUPPORT_TARGETS = browserslistToEsbuild()

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        preserveDirectives(),
        babel({
            babelHelpers: 'runtime',
            plugins: [
                ['@babel/plugin-transform-runtime'],
                [
                    'babel-plugin-polyfill-corejs3',
                    {
                        method: 'usage-pure',
                        version: pkg.dependencies['core-js-pure'],
                        proposals: true,
                        shouldInjectPolyfill: (polyfillName: string) => {
                            if (polyfillName === 'esnext.json.parse' || polyfillName === 'es.string.trim') {
                                return false
                            }
                            return true
                        },
                    },
                ],
            ],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            exclude: 'node_modules/**',
        }),
    ],
    build: {
        outDir: 'dist',
        lib: {
            entry: {
                index: './src/index.ts',
                react: './src/react.tsx',
                next: './src/next.tsx',
                utils: './src/utils/index.ts',
            },
        },
        rollupOptions: {
            external: [...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies)].flatMap((dep) => [
                dep,
                new RegExp(`^${dep}/.*`),
            ]),
            output: [
                {
                    format: 'es',
                    dir: 'dist/esm',
                },
                {
                    format: 'cjs',
                    dir: 'dist/cjs',
                },
            ],
        },
        target: SUPPORT_TARGETS,
    },
})
