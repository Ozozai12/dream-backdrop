import { BackButton } from "../src/components/BackButton/BackButton"
import { Palette } from "../src/components/Palette/Palette"

import { concrete } from '../src/items/concrete'

export const ConcretePage = () => {
    return (
        <>
            <BackButton />
            <Palette items={concrete} entry=" декоративної штукатурки" />
        </>
    )
}