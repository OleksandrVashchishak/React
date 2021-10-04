import React, {memo} from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    
console.count('count')

    return (

        <ul className="personal__panel-ul">
            <a href="/" className="filter__back close-mobile-acc">
                НАЗАД
                <span>
                    <svg width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.422336 9.58521C0.170182 9.23581 0.170182 8.76419 0.422335 8.41479L5.68911 1.11693C6.25697 0.330091 7.5 0.731792 7.5 1.70214L7.5 16.2979C7.5 17.2682 6.25697 17.6699 5.68911 16.8831L0.422336 9.58521Z"
                            fill="white" />
                    </svg>
                </span>
            </a>
            <Link to="/account/data"><li className="personal__list">Дані</li></Link>
            <Link to="/account/realty"><li className="personal__list">Нерухомість</li> </Link>
            <Link to="/account/plan"><li className="personal__list">Шаблони</li> </Link>
            <Link to="/account/messages"><li className="personal__list">Повідомлення</li> </Link>
            <Link to="/account/friends"><li className="personal__list">Мої друзі</li> </Link>
            <Link to="/account/users"><li className="personal__list">Всі користувачі</li> </Link>
            <Link to="/account/construct"><li className="personal__list">Конструктор шаблонів</li> </Link>
            <Link to="/account/control"><li className="personal__list">Керування аккаунтом</li> </Link>

        </ul>
    )
}

export default  memo( Menu ) 
