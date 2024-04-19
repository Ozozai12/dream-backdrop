import { Palette } from "../src/components/Palette/Palette"

import { trays } from '../src/items/trays'

export const TraysPage = () => {
    return (
        <>
            <Palette items={trays} entry=" таць із дерева" />
        </>
    )
}