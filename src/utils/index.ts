import {ImageFilter} from '$types'

type CSSFilterValue = NonNullable<CSSStyleDeclaration['filter']>

export function getFilter({grayscale = 0, sepia = 0, brightness = 100, contrast = 100, blur = 0}: ImageFilter = {}): {
    filter: CSSFilterValue
} {
    const filterValue: CSSFilterValue =
        `grayscale(${grayscale}%) sepia(${sepia}%) brightness(${brightness}%) contrast(${contrast}%) blur(${blur}px)`.trim()

    return {
        filter: filterValue,
    }
}

// polyfill examples
export const JSONParse = (json: string) => {
    try {
        return JSON.parse(json)
    } catch {
        return null
    }
}
