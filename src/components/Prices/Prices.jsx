import { IconContext } from "react-icons";

import { CgClose } from "react-icons/cg";

import { options } from "../../items/options";

import css from './Prices.module.css'

export const Prices = ({ onPricesClose }) => {
    return (
        <div className={css.backdrop}>
            <span className={css.closeBtn} onClick={onPricesClose}>
                <IconContext.Provider value={{ className: css.closeIcon }}>
                    <CgClose />
                </IconContext.Provider>
            </span>
            <ul>
                {options.map((option) => {
                    return (
                        <li key={option.id} className={css.paletteItem}>
                            <span className={css.itemName}>{option.size}:{option.price}</span>
                        </li>)
                })}
            </ul>
        </div>
    )
}