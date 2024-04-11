import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import css from './General.module.css'

export const General = () => {
    return (
        <>
            <main>
                <span className={css.welcome}>Палітра fotofon.dream</span>
                <br />
                <span className={css.choose}>Оберіть матеріал</span>
                <Link to='/wood' className={css.optionLink}>
                    <div className={css.optionBox}>
                        <LazyLoadImage
                            alt='wood backdrop example'
                            className={css.optionImage}
                            src='https://res.cloudinary.com/dmadhdzzm/image/upload/v1711972069/fotofon.dream/ns7luzaf1bzvhljwpggs.jpg'
                            effect="blur"
                            loading='lazy'
                        />
                        <span className={css.optionName}>Фони з натурального дерева</span>
                    </div>
                </Link>
                <Link to='/concrete'>
                    <div className={css.optionBox}>
                        <LazyLoadImage
                            alt='concrete backdrop example'
                            className={css.optionImage}
                            src='https://res.cloudinary.com/dmadhdzzm/image/upload/v1711972068/fotofon.dream/yzviykbglzpvnk3st89m.jpg'
                            effect="blur"
                            loading='lazy'
                        />
                        <span className={css.optionName}>Фони з декоративних штукатурок <br />
                            (бетон, мармур, молдінги)</span>
                    </div>
                </Link>
            </main>
        </>
    )
}