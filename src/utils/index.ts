import {ImageFilter} from '$types'

type CSSFilterValue = string

interface CSSFilterProperties {
    filter: CSSFilterValue
}

export function getFilter({
    grayscale = 0,
    sepia = 0,
    brightness = 100,
    contrast = 100,
    blur = 0,
}: ImageFilter = {}): CSSFilterProperties {
    const filterValue: CSSFilterValue =
        `grayscale(${grayscale}%) sepia(${sepia}%) brightness(${brightness}%) contrast(${contrast}%) blur(${blur}px)`.trim()

    return {
        filter: filterValue,
    }
}
