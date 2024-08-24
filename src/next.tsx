'use client'

import Image from 'next/image'
import {useState, useCallback, CSSProperties, useMemo, memo} from 'react'

import {NextImageFilterProps} from '$types'
import {getFilter} from '$utils'

import type {FC} from 'react'

export const NextImageFilter: FC<NextImageFilterProps> = memo(
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
                <Image onError={handleError} {...props} />
            </div>
        )
    },
)
