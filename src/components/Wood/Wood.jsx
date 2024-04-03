import { useState } from 'react'
import { IconContext } from 'react-icons';

import { CiStar } from "react-icons/ci";

import { wood } from '../../items/wood'

import css from './Wood.module.css'
import { Bestseller } from '../Bestseller/Bestseller';

export const Wood = () => {
    return (
        <>
            <span className={css.paletteEntry}>Палітра фонів з натуральної деревини</span>
            <Bestseller items={wood} />
            <ul className={css.regularBox}>
                {wood.map((backdrop) => {
                    if (backdrop.bs !== true) {
                        return (
                            <li key={backdrop.id} className={css.paletteItem}>
                                <img src={backdrop.src} alt={backdrop.name} className={css.paletteImage} />
                                <span className={css.itemName}>{backdrop.name}</span>
                            </li>)
                    }
                })}
            </ul>
        </>
    )
}