import React from 'react'
import { editRealty } from './../../redux/actions/realty';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { realtyVaild, onChangeValid } from './validation'

const EditRealty = () => {
    const [errorObj, setErrorObj] = React.useState({})
    const history = useHistory();
    const itemIdArr = window.location.href.split('id=')
    const itemId = itemIdArr[itemIdArr.length - 1]
    const { realtyItems } = useSelector((state) => state.realty);
    const editItem = realtyItems.find(item => item.id === itemId);
    const [realty, setRealty] = React.useState({
        id: itemId,
        nameRealty: editItem.nameRealty,
        category: editItem.category,
        price: editItem.price,
        typeSale: editItem.typeSale,
        firstName: editItem.firstName,
        lastName: editItem.lastName,
        auction: editItem.auction,
        userId: editItem.userId,
        dbId: editItem.dbId
    })

    const dispatch = useDispatch();

    const setRealtyValue = (e) => {
        const { name, value } = e.target;
        setRealty({
            ...realty,
            [name]: value
        })
        const validObj = onChangeValid(name, value)
        setErrorObj(Object.assign(errorObj, validObj))

    }

    const onChecked = (e) => {
        const { name } = e.target;
        setRealty({
            ...realty,
            [name]: e.target.checked
        })
    }

    const setStateRealty = () => {
        const validObj = realtyVaild(realty)

        setErrorObj(validObj)
        if (validObj.isErrors) {
            return
        }


        dispatch(editRealty(realty));
        history.push(`/account/realty`);
        setTimeout(() => {
            alert('Ваше оголошення успішно змінене!')
        }, 1)
    }

    return (
        <div className="personal__frame-add-realty">
            <div className="personal__frame-cont">
                <div className="personal__mobile-menu-cont">
                    <p className="personal__mobile-menu-text">МЕНЮ</p>
                    <div className="personal__mobile-menu">
                        <div className="personal__mobile-menu-inner"></div>
                    </div>
                </div>
                <h3 className="personal__form-title">Нерухомість</h3>

                <div className="personal__line"></div>
                <p className="personal__less-title">Зовнішній вигляд / опис</p>

                <p className="personal__form-text personal__form-text-start">Название</p>
                <span className='realty-error-validation'>{errorObj.nameRealty && errorObj.nameRealty}</span>
                <input type="text" className="personal__input" name='nameRealty' value={realty.nameRealty} onChange={setRealtyValue} placeholder="Название" />


                <div className="select-custom-acc">
                    <p className="personal__form-text">Категория:</p>
                    <span className='realty-error-validation'>{errorObj.category && errorObj.category}</span>
                    <input type="text" className="personal__input" placeholder="Категория:" name='category' value={realty.category} onChange={setRealtyValue} />
                </div>
                <span className='realty-error-validation'>{errorObj.typeSale && errorObj.typeSale}</span>
                <div className="personal__radio-btn-three">

                    <input type="radio" id="contactChoice1" name="typeSale" value="rent" className="personal__radio-btn" onChange={setRealtyValue} />
                    <label htmlFor="contactChoice1">Оренда</label>

                    <input type="radio" id="contactChoice2" name="typeSale" value="sale" className="personal__radio-btn" onChange={setRealtyValue} />
                    <label htmlFor="contactChoice2">Продаж</label>

                    <input type="radio" id="contactChoice3" name="typeSale" value="burter" className="personal__radio-btn" onChange={setRealtyValue} />
                    <label htmlFor="contactChoice3">Обмін</label>
                </div>

                <div className="personal__add-select-cont">
                    <div className="select-custom-acc">
                        <p className="personal__form-text">Ціна, $</p>
                        <span className='realty-error-validation'>{errorObj.price && errorObj.price}</span>
                        <input type="number" className="personal__input" placeholder="Цена" name='price' value={realty.price} onChange={setRealtyValue} />
                    </div>

                    <div className="select-custom-acc select-custom-acc-checkbox">
                        <div className="personal__radio-btn-two">
                            <input type="checkbox" id="salesRealty1" name="auction" value='true'
                                className="personal__radio-btn checkbox-add-rel-inp" onChange={onChecked} />
                            <label htmlFor="salesRealty1" className="checkbox-add-rel" >Торг</label>
                        </div>
                    </div>
                </div>

                <div className="personal__line personal__line-bottom"></div>
                <p className="personal__less-title personal__less-title-bottom">Контактная информация</p>
                <div className="personal__add-select-cont">
                    <div className="select-custom-acc">
                        <p className="personal__form-text">Имя</p>
                        <span className='realty-error-validation'>{errorObj.firstName && errorObj.firstName}</span>
                        <input type="text" className="personal__input" placeholder="Имя" name='firstName' value={realty.firstName} onChange={setRealtyValue} />
                    </div>

                    <div className="select-custom-acc">
                        <p className="personal__form-text">Фамилия</p>
                        <span className='realty-error-validation'>{errorObj.lastName && errorObj.lastName}</span>
                        <input type="text" className="personal__input" placeholder="Фамилия" name='lastName' value={realty.lastName} onChange={setRealtyValue} />
                    </div>
                </div>

                <input type="button" value="Змінити оголошення" className="personal__button personal__button-add-realty" onClick={() => setStateRealty()} />
                <input type="button" value="Відмінити" className="personal__button personal__button-add-realty personal__button-add-white" />
            </div>
        </div>
    )
}

export default EditRealty
