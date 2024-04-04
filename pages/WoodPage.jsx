import { Palette } from '../src/components/Palette/Palette'

import { wood } from '../src/items/wood'

export const WoodPage = () => {
    return (
        <>
            <Palette items={wood} entry="Палітра фонів з натуральної деревини" />
        </>
    )
}