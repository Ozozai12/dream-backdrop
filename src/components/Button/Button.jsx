import css from './Button.module.css'

export const Button = ({ onPricesOpen }) => {
    return (
        <>
            <div className={css.priceButton} onClick={onPricesOpen}>
                <span className={css.buttonText}>Ціни</span>
            </div>
        </>


    )
}