import React from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RealtyPageAdd, RealtyPageTop, RealtyItem } from './components'

function RealtyPage() {
    const { realtyItems } = useSelector((state) => state.realty);
    return (
        <>
            <RealtyPageTop />
            <RealtyPageAdd Link={Link} />
            <section className="offers-block container vacancy-container offers-block-property">
                <div className="offers-block__offers">
                    <ul className="offers-block__list ">
                        {realtyItems.map((item) => (
                            <Link key={item.id} className='offers-block__item new-ads__item' to={`/realty/id=${item.id}`}>  <RealtyItem item={item} /> </Link>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default RealtyPage;
