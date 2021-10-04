import React from 'react'

const PlanItem = ({item}) => {
    return (
    <div className='item-plan-tab'>
        <h3 className="plan-title-tab">{item.name}</h3>
        <div className='item-plan-wrapper' dangerouslySetInnerHTML={item.plan}></div>
    </div>
    )
}

export default PlanItem
