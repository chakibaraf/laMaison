import { useState } from 'react'
import React from 'react'

export default function QuestionForm() {

    const [inputValue, setInputValue] = useState('posez votre question')

    const isInputErrot = !inputValue.includes('f');



    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }
    return (

        <>
            <div>


                {isInputErrot && (
                    <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
                )}

                <textarea
                    value={inputValue}
                    onChange={(e) => checkValue(e.target.value)}>

                </textarea>
                <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
            </div>

        </>
    )
}



