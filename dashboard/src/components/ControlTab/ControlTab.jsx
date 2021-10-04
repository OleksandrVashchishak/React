import React from 'react'
import ChangeAva from './ChangeAva'
import ChangePassword from './ChangePassword'

const ControlTab = () => {
    return (
        <div className="personal__frame-cont">
            <div className="personal__mobile-menu-cont">
                <p className="personal__mobile-menu-text"> МЕНЮ</p>
                <div className="personal__mobile-menu">
                    <div className="personal__mobile-menu-inner"></div>
                </div>
            </div>

            <h3 className="personal__form-title">Керування аккаунтом</h3>
            <div className="personal__line"></div>
            <ChangeAva />
            <ChangePassword />
        </div>
    )
}

export default ControlTab
