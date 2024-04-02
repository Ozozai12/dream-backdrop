import { useState } from 'react'

import css from './Wood.module.css'

const wood = [
    {
        id: 1,
        name: 'Гіркий шоколад',
        src: 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1711972069/fotofon.dream/ns7luzaf1bzvhljwpggs.jpg'
    },
    {
        id: 2,
        name: 'Обпалений білий',
        src: 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1711972068/fotofon.dream/yzviykbglzpvnk3st89m.jpg'
    }
]

export const Wood = () => {
    return (
        <>
            <span className={css.paletteEntry}>Палітра фонів з натуральної деревини</span>
            <ul className={css.paletteList}>
                {wood.map((backdrop) => {
                    return (
                        <li key={backdrop.id} className={css.paletteItem}>
                            <img src={backdrop.src} alt={backdrop.name} />
                            <span className={css.itemName}>{backdrop.name}</span>
                        </li>
                    )

                })}
            </ul>
        </>
    )
}