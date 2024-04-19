import { Palette } from "../src/components/Palette/Palette"

import { concrete } from '../src/items/concrete'

export const ConcretePage = () => {
    return (
        <>
            <Palette items={concrete} entry=" фотофонів з декоративної штукатурки" />
        </>
    )
}