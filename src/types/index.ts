import type {ImageProps} from 'next/image'
import type {ImgHTMLAttributes} from 'react'

export interface ImageFilter {
    grayscale?: number
    sepia?: number
    brightness?: number
    contrast?: number
    blur?: number
}

export type ReactImageFilterProps = ImgHTMLAttributes<HTMLImageElement> & ImageFilter

export type NextImageFilterProps = ImageProps & ImageFilter
