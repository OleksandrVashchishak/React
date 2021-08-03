import React from 'react'

const AddItem = ({ getData }) => {
    let [inputText, setInputText] = React.useState('')

    const setInput = (value) => {
        setInputText(inputText.concat(value.nativeEvent.data))
    }

    const getDataClick = () => {
        if (inputText === '') {
            return
        }
        getData(inputText)
        setInputText('')
    }

  

    return (

        <div className='add-item'>
            <input type="text" onChange={(value) => setInput(value)} placeholder='Your task' value={inputText} />
            <button onClick={() => getDataClick()}> Add </button>
        </div>
    )
}

export default AddItem
