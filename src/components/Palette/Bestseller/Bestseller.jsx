import ProgressiveImage from "react-progressive-graceful-image";

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

                <ul className={css.regularBox}>
                    {items.map((backdrop) => {
                        if (backdrop.bs === true) {
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
            </div>
        </>
    )


}

