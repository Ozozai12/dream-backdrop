import { IconContext } from 'react-icons';
import { CiStar } from "react-icons/ci";

import css from './Bestseller.module.css'

export const Bestseller = ({ items }) => {
    return (
        <>
            <div className={css.bestsellerBox}>
                <div className={css.articleBox}>
                    <IconContext.Provider value={{ className: css.star }}>
                        <CiStar />
                    </IconContext.Provider>
                    <span className={css.bestsellerArticle}>Бестселлери</span>
                </div>

                <ul>
                    {items.map((backdrop) => {
                        if (backdrop.bs === true) {
                            return (
                                <li key={backdrop.id} className={css.paletteItem}>
                                    <img src={backdrop.src} alt={backdrop.name} className={css.paletteImage} />
                                    <span className={css.itemName}>{backdrop.name}</span>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </>
    )


}

