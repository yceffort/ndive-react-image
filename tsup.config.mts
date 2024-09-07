import {defineConfig} from 'tsup'

import type {Format, Options} from 'tsup'

const entries: Options['entry'] = {
    index: './src/index.ts',
    react: './src/react.tsx',
    next: './src/next.tsx',
    utils: './src/utils/index.ts',
    types: './src/types/index.ts',
} as const

const sharedConfig: Options = {
    entry: entries,
    dts: {only: true},
} as const

const createConfig = (format: Exclude<Format, 'iife'>) =>
    defineConfig({
        ...sharedConfig,
        format: [format],
        outDir: `./dist/${format}`,
    })

export default [createConfig('esm'), createConfig('cjs')]
