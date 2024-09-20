import {describe, test, expect} from 'vitest'

import {getFilter} from './index'

describe('getFilter function', () => {
    test('should return default values when no parameters are provided', () => {
        const result = getFilter()
        expect(result).toEqual({
            filter: 'grayscale(0%) sepia(0%) brightness(100%) contrast(100%) blur(0px)',
        })
    })

    test('should apply grayscale correctly', () => {
        const result = getFilter({grayscale: 50})
        expect(result.filter).toContain('grayscale(50%)')
    })

    test('should apply sepia correctly', () => {
        const result = getFilter({sepia: 75})
        expect(result.filter).toContain('sepia(75%)')
    })

    test('should apply brightness correctly', () => {
        const result = getFilter({brightness: 150})
        expect(result.filter).toContain('brightness(150%)')
    })

    test('should apply contrast correctly', () => {
        const result = getFilter({contrast: 200})
        expect(result.filter).toContain('contrast(200%)')
    })

    test('should apply blur correctly', () => {
        const result = getFilter({blur: 5})
        expect(result.filter).toContain('blur(5px)')
    })

    test('should apply multiple filters correctly', () => {
        const result = getFilter({
            grayscale: 30,
            sepia: 20,
            brightness: 110,
            contrast: 90,
            blur: 2,
        })
        expect(result).toEqual({
            filter: 'grayscale(30%) sepia(20%) brightness(110%) contrast(90%) blur(2px)',
        })
    })

    test('should maintain order of filters', () => {
        const result = getFilter({
            blur: 3,
            grayscale: 40,
            contrast: 80,
            sepia: 10,
            brightness: 120,
        })
        expect(result.filter).toBe('grayscale(40%) sepia(10%) brightness(120%) contrast(80%) blur(3px)')
    })
})
