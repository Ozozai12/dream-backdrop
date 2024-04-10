import { LazyLoadImage } from 'react-lazy-load-image-component';

import { IconContext } from 'react-icons';
import { CiStar } from "react-icons/ci";

import css from './Bestseller.module.css'
import 'react-lazy-load-image-component/src/effects/blur.css';

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
                                    <LazyLoadImage
                                        alt={backdrop.name}
                                        className={css.paletteImage}
                                        src={backdrop.src}
                                        effect="blur"

                                    />
                                    <span className={css.itemName}>{backdrop.name}</span>
                                </li>)
                        }
                    })}
                </ul>
            </div>
        </>
    )


}

