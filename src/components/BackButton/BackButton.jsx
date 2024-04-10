import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

import { MdArrowBack } from "react-icons/md";

import css from './BackButton.module.css'

export const BackButton = () => {
    return (
        <Link to='/' className={css.buttonBox}>
            <IconContext.Provider value={{ className: css.backIcon }}>
                <MdArrowBack />
                <span className={css.backText}>Назад</span>
            </IconContext.Provider>
        </Link>
    )
}