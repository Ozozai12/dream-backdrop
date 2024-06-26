import { IconContext } from "react-icons";

import { CgClose } from "react-icons/cg";

import options from "../../items/options";

import css from './Prices.module.css'

export const Prices = ({ onPricesClose, material }) => {
    const optionPrices = (material) => {
        if (material === ' фотофонів з декоративної штукатурки') {
            return options.optionsConcrete
        }
        if (material === ' таць із дерева') {
            return options.optionsTrays
        }
        else return options.optionsWood
    }

    return (
        <div className={css.backdrop}>
            <div className={css.pricesBox}>



                <span className={css.closeBtn} onClick={onPricesClose}>
                    <IconContext.Provider value={{ className: css.closeIcon }}>
                        <CgClose />
                    </IconContext.Provider>
                </span>

                <span className={css.paletteEntry}>Ціни  {material}</span>
                <ul>
                    {optionPrices(material).map((option) => {
                        return (
                            <li key={option.id} className={css.paletteItem}>
                                <span className={css.itemText}>{option.size}</span>
                                <span className={css.itemText}>{option.price} грн</span>
                            </li>)
                    })}
                </ul>
                <span className={css.afterText}>*інші розміри також виготовляємо, для прорахунку вартості <a href="https://www.instagram.com/fotofon.dream/" target="_blank"
                    rel="noopener noreferrer nofollow" className={css.instaLink}>напишіть в дірект</a>  Instagram</span>
            </div>

        </div>
    )
}