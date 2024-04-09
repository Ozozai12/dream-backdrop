import ProgressiveImage from "react-progressive-graceful-image";
import { useState } from 'react';

import { Bestseller } from './Bestseller/Bestseller';
import { Button } from '../Button/Button'
import { Prices } from "../Prices/Prices";

import css from './Palette.module.css'

export const Palette = ({ entry, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && <Prices onPricesClose={closeMenu} />}
            {!isOpen && (
                <>
                    <span className={css.paletteEntry}>{entry}</span>
                    <Button onPricesOpen={openMenu} />
                    <Bestseller items={items} />
                    <ul className={css.regularBox}>
                        {items.map((backdrop) => {
                            if (backdrop.bs !== true) {
                                return (
                                    <li key={backdrop.id} className={css.paletteItem}>
                                        <ProgressiveImage src={backdrop.src} placeholder={backdrop.src}>
                                            {(src) => <img src={src} alt={backdrop.name} className={css.paletteImage} loading="lazy" />}
                                        </ProgressiveImage>
                                        <span className={css.itemName}>{backdrop.name}</span>
                                    </li>)
                            }
                        })}
                    </ul>
                </>
            )}
        </>
    )
}