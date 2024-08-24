'use client'

import {useState, useCallback, CSSProperties, useMemo, memo} from 'react'

import {ReactImageFilterProps} from '$types'
import {getFilter} from '$utils'

import type {FC} from 'react'

export const ReactImageFilter: FC<ReactImageFilterProps> = memo(
    ({grayscale = 0, sepia = 0, brightness = 100, contrast = 100, blur = 0, ...props}) => {
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
                <img onError={handleError} {...props} alt={props.alt || ''} />
            </div>
        )
    },
)
