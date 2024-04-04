import { Palette } from "../src/components/Palette/Palette"

import { concrete } from '../src/items/concrete'

export const ConcretePage = () => {
    return (
        <>
            <Palette items={concrete} entry="Палітра фонів з декоративної штукатурки" />
        </>
    )
}