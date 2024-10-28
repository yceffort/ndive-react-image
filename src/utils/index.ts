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

export function stringMatchAll(str: string, regexp: RegExp) {
    return Array.from(str.matchAll(regexp))
}

// export function at<T>(arr: T[], index: number): T | undefined {
//     return arr.at(index)
// }

// export function findLast<T>(arr: T[], callback: (value: T, index: number, array: T[]) => unknown): T | undefined {
//     return arr.findLast(callback)
// }
