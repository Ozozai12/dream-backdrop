import { IconContext } from "react-icons";

import { CgClose } from "react-icons/cg";

import options from "../../items/options";

import css from './Prices.module.css'

export const Prices = ({ onPricesClose, material }) => {
    const optionPrices = (material) => {
        if (material === ' декоративної штукатурки') {
            return options.optionsConcrete
        } else return options.optionsWood
    }

    return (
        <div className={css.backdrop}>
            <div className={css.pricesBox}>
                <span className={css.closeBtn} onClick={onPricesClose}>
                    <IconContext.Provider value={{ className: css.closeIcon }}>
                        <CgClose />
                    </IconContext.Provider>
                </span>
                <span className={css.paletteEntry}>Ціни на фотофони з {material}</span>
                <ul>
                    {optionPrices(material).map((option) => {
                        return (
                            <li key={option.id} className={css.paletteItem}>
                                <span className={css.itemText}>{option.size}</span>
                                <span className={css.itemText}>{option.price} грн</span>
                            </li>)
                    })}
                </ul>
            </div>

        </div>
    )
}