import { BackButton } from "../src/components/BackButton/BackButton"
import { Palette } from '../src/components/Palette/Palette'

import { wood } from '../src/items/wood'

export const WoodPage = () => {
    return (
        <>
            <BackButton />
            <Palette items={wood} entry=" натуральної деревини" />
        </>
    )
}