import React from 'react'
import RemoveItem from './RemoveItem'

const Item = ({ value, getRemove, id, getEdit }) => {
    let [visibleEdit, setVisibleEdit] = React.useState(false)
    let [editText, setEditText] = React.useState(value)

    const getEditText = () => {
        setVisibleEdit(!visibleEdit)
        getEdit(editText, id)
    }

    return (
        <div className='item'>
            <p className="item__value">{value}
            </p>

            <div className='df'>
                <div className='edit-item'>
                    {visibleEdit && <div>
                        <input type="text" defaultValue={editText} onChange={(value) => setEditText(editText.concat(value.nativeEvent.data))} />
                        <span onClick={() => getEditText()} > Ok</span>
                    </div>}
                    {!visibleEdit && <span onClick={() => setVisibleEdit(!visibleEdit)}> Edit </span>}
                </div>
                <p className="item__remove"> <RemoveItem getRemove={getRemove} id={id} /> </p>
            </div>
        </div>
    )
}

export default Item
