import css from './Concrete.module.css'

const concrete = [
    {
        id: 1,
        name: 'Гіркий шоколад',
        src: 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1711972069/fotofon.dream/ns7luzaf1bzvhljwpggs.jpg'
    },
    {
        id: 2,
        name: 'Обпалений білий',
        src: 'https://res.cloudinary.com/dmadhdzzm/image/upload/v1711972068/fotofon.dream/yzviykbglzpvnk3st89m.jpg'
    }
]

export const Concrete = () => {
    return (
        <>
            <span className={css.paletteEntry}>Палітра фонів з декоративної штукатурки</span>
            <ul className={css.paletteList}>
                {concrete.map((backdrop) => {
                    return (
                        <li key={backdrop.id} className={css.paletteItem}>
                            <img src={backdrop.src} alt={backdrop.name} />
                            <span className={css.itemName}>{backdrop.name}</span>
                        </li>
                    )

                })}
            </ul>
        </>
    )
}