import React from 'react'
import { Link } from 'react-router-dom';

const MessageHeader = ({ partner }) => {
    return (
        <div className="messages__header">
            <Link to='/account/messages'>  <div className="messages__back"></div> </Link>
            <div className="messages__head-cont">
                <div className="messages__name-cont">
                    <a href="/">

                        <p className="messages__name-main">
                            {partner.firstName + ' ' + partner.lastName}
                            <br />
                        </p>
                    </a>
                </div>
                <div className="messages__status-write-cont">
                    <p className="messages__status-write">пишет...
                        <img src="img/svg/status-wrie-massae.svg" className="messages__write-icon" alt="" />

                    </p>
                </div>
            </div>

            <div className="messages__empty-block"></div>
        </div>
    )
}

export default MessageHeader
