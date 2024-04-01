import css from './General.module.css'

export const General = () => {
    return (
        <>
            <div>
                <span className={css.welcome}>Ласкаво просимо <br /> до палітри fotofon.dream</span>
                <br />
                <span className={css.choose}>Оберіть матеріал</span>
                <div className={css.optionBox}>
                    <img src='https://res.cloudinary.com/dmadhdzzm/image/upload/v1711972069/fotofon.dream/ns7luzaf1bzvhljwpggs.jpg' alt='wood backdrop example' className={css.optionImage} />
                    <span className={css.optionName}>Дерев'яні фони</span>
                </div>
                <div className={css.optionBox}>
                    <img src='https://res.cloudinary.com/dmadhdzzm/image/upload/v1711972068/fotofon.dream/yzviykbglzpvnk3st89m.jpg' alt='concrete backdrop example' className={css.optionImage} />
                    <span className={css.optionName}>Бетонні фони</span>
                </div>
            </div>
        </>
    )
}