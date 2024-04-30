import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';

import { BackButton } from '../BackButton/BackButton'
import { Bestseller } from './Bestseller/Bestseller';
import { Button } from '../Button/Button'
import { Prices } from "../Prices/Prices";

import css from './Palette.module.css'
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Palette = ({ entry, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden'
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto'
    };

    console.log()

    return (
        <>
            {isOpen && <Prices onPricesClose={closeMenu} material={entry} />}
            <BackButton />
            <>
                <span className={css.paletteEntry}>Палітра {entry}</span>
                <Button onPricesOpen={openMenu} />
                {items[0].id !== 't1' ? <Bestseller items={items} /> : ''}
                <ul className={css.regularBox}>
                    {items.map((backdrop) => {
                        if (backdrop.bs !== true) {
                            return (
                                <li key={backdrop.id} className={css.paletteItem}>
                                    <LazyLoadImage
                                        alt={backdrop.name}
                                        className={css.paletteImage}
                                        src={backdrop.src}
                                        effect="blur"
                                        loading='lazy'
                                    />
                                    <span className={css.itemName}>{backdrop.name}</span>
                                    <span className={css.itemNotice}>{backdrop.notice || ''}</span>
                                </li>)
                        }
                    })}
                </ul>
            </>
        </>
    )
}