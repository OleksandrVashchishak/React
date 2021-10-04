import React from 'react'
import { useSelector } from 'react-redux';
import { SingleRealtyForm, SingleRealtyQR, SingleRealtyTop, SingleRealtyNav, SingleRealtyImage } from './components'
import Prelouder from '../../components/Prelouder/Prelouder';

function SingleRealty() {

    const itemIdArr = window.location.href.split('=')
    const itemId = itemIdArr[itemIdArr.length - 1]
    const { realtyItems } = useSelector((state) => state.realty);
    const item = realtyItems.find(item => item.id === itemId);

    return (
        <>
            {item &&
                <>
                    <SingleRealtyNav item={item} />
                    <SingleRealtyTop item={item} />
                
                    <section className="open-notice__body open-notice open-notice__vacansion-body">
                        <div className=" open-notice__container-df">
                            <SingleRealtyImage />
                            <div className="open-notice__body-right">
                                <SingleRealtyForm userId={item.userId} item={item}/>
                                <SingleRealtyQR />
                            </div>
                        </div>
                    </section>
                </>
            }

            {!item &&
                <Prelouder />
            }
        </>
    )
}

export default SingleRealty
