
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
                                <img src={backdrop.src} alt={backdrop.name} className={css.paletteImage} loading="lazy" />
                                <span className={css.itemName}>{backdrop.name}</span>
                            </li>)
                    }
                })}
            </ul>
        </>
    )
}