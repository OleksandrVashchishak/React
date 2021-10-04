import React from 'react'
import Picker from 'emoji-picker-react';

const MessageEmjoi = ({ setMessage, message }) => {
    const [showEmjoi, setShowEmjoi] = React.useState(false)

    const onEmojiClick = (event, emojiObject) => {
        setMessage(message + emojiObject.emoji)
    };

    const accountRef = React.useRef();
    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(accountRef.current)) {
            setShowEmjoi(false)
        }
    };
    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div ref={accountRef} className="emjoi-message-wrap">
            <p className='emjoi-toggle' onClick={() => setShowEmjoi(!showEmjoi)} >Emjoi 😀😁😂</p>
            <div className="messages__smiles-wrap">
                {showEmjoi &&
                    <Picker onEmojiClick={onEmojiClick} groupVisibility={{
                        flags: false,
                        animals_nature: false,
                        food_drink: false,
                        travel_places: false,
                        activities: false,
                        objects: false,
                        symbols: false,
                        recently_used: false,

                    }} />
                }
            </div>
        </div>
    )
}

export default MessageEmjoi
