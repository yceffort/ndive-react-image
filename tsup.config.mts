import {defineConfig, Format} from 'tsup'

const entries = {
    index: './src/index.ts',
    react: './src/react.tsx',
    next: './src/next.tsx',
    utils: './src/utils/index.ts',
    types: './src/types/index.ts',
}

const sharedConfig = {
    entry: entries,
    dts: {only: true},
    minify: true,
}

const createConfig = (format: Exclude<Format, 'iife'>) =>
    defineConfig({
        ...sharedConfig,
        format: [format],
        outDir: `./dist/${format}`,
    })

export default [createConfig('esm'), createConfig('cjs')]
