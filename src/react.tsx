'use client'

import {useState, useCallback, CSSProperties, useMemo, memo} from 'react'

import {ReactImageFilterProps} from '$types'
import {getFilter} from '$utils'

import type {FC} from 'react'

export const ReactImageFilter: FC<ReactImageFilterProps> = memo(
    ({
        src,
        alt,
        width,
        height,
        grayscale = 0,
        sepia = 0,
        brightness = 100,
        contrast = 100,
        blur = 0,
        style,
        ...props
    }) => {
        const [imageError, setImageError] = useState(false)

        const handleError = useCallback(() => {
            setImageError(true)
        }, [])

        const filterStyle: CSSProperties = useMemo(
            () => getFilter({grayscale, sepia, brightness, contrast, blur}),
            [grayscale, sepia, brightness, contrast, blur],
        )

        if (imageError) {
            return <div>Image failed to load</div>
        }

        return (
            <div style={filterStyle}>
                <img src={src} alt={alt} width={width} height={height} onError={handleError} style={style} {...props} />
            </div>
        )
    },
)
