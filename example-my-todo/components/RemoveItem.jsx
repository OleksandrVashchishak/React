import React from 'react'

const RemoveItem = ({ getRemove, id }) => {
    const getRemoveId = () => {
        getRemove(id)
    }
    return (
        <span className="item__remove-icon" onClick={() => getRemoveId(id)} ></span>
    )
}

export default RemoveItem
