import ProgressiveImage from "react-progressive-graceful-image";

import css from './Palette.module.css'
import { Bestseller } from './Bestseller/Bestseller';

export const Palette = ({ entry, items }) => {
    return (
        <>
            <span className={css.paletteEntry}>{entry}</span>
            <Bestseller items={items} />
            <ul className={css.regularBox}>
                {items.map((backdrop) => {
                    if (backdrop.bs !== true) {
                        return (
                            <li key={backdrop.id} className={css.paletteItem}>
                                <ProgressiveImage src={backdrop.src} placeholder={backdrop.src}>
                                    {(src) => <img src={src} alt={backdrop.name} loading="lazy" />}
                                </ProgressiveImage>
                                <span className={css.itemName}>{backdrop.name}</span>
                            </li>)
                    }
                })}
            </ul>
        </>
    )
}