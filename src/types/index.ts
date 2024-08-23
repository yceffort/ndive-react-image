import {ImgHTMLAttributes} from 'react'

import type {ImageProps} from 'next/image'

export interface ImageFilter {
    grayscale?: number
    sepia?: number
    brightness?: number
    contrast?: number
    blur?: number
}

export type ReactImageFilterProps = ImgHTMLAttributes<HTMLImageElement> & ImageFilter

export type NextImageFilterProps = Omit<ImageProps, 'style'> & ImageFilter
