import React from 'react'
import editSvg from '../../assets/img/svg/edit-table.svg'
import removeSvg from '../../assets/img/svg/cancel-table.svg'
import { removeRealty } from './../../redux/actions/realty';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const RealtyItem = ({ item, allItems, numberCounter }) => {
    const dispatch = useDispatch();

    const removeItem = (itemId) => {
        if (!window.confirm(`Ви точно хоччете видалити оголошення: '${item.nameRealty}'`)) {
            return
        }
        dispatch(removeRealty(itemId));
    }

    return (
        <div className="personal__real-table-item">
            <div className="personal__real-col personal__real-col-number">{numberCounter}</div>
            <div className="personal__real-col personal__real-col-name">{item.nameRealty}</div>
            <div className="personal__real-col personal__real-col-cat">{item.category}</div>
            <div className="personal__real-col personal__real-col-date">{item.price} $</div>
            <div className="personal__real-col personal__real-col-edit">
                <Link
                    to={`/account/edit-realty/id=${item.id}`}
                >  <button className="personal__real-icon-edit personal__real-col-edit-i" >
                        <img src={editSvg} alt="" />
                    </button> </Link>
                <button className="personal__real-icon-close personal__real-col-edit-i" onClick={() => removeItem(item.dbId)}>
                    <img src={removeSvg} alt="" />
                </button>
            </div>
        </div>


    )
}

export default RealtyItem
