import React, {useEffect, useState} from 'react';

import './card.css'
import Answer from "../answer";

const Card = ({question, answers, img, correct}) => {
    //const [formValue, setFormValue] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [answerForCheck, setAnswerForCheck] = useState();

    function generatePathForPic(img) {
        if (img !== undefined) return `images/${img}`
    }

    function verification(e) {
        e.preventDefault();
        answerForCheck == correct ? setIsCorrect(true) : setIsCorrect(false)
        console.log(isCorrect)
    }

    function getAnswerForCheck(answer) {
        setAnswerForCheck(answer)
    }

    return (
        <div>
            {
                img !== undefined ? <img src={generatePathForPic(img)} alt="pic" /> : null
            }
            <p>{question}</p>
            {
                Object.values(answers).map((a, idx) => {
                    return <Answer
                                value={Object.keys(answers)[idx]}
                                question={a}
                                id={idx + 1}
                                getAnswerForCheck={getAnswerForCheck}
                           />
                })
            }
            <button onClick={verification}>Ответить</button>
            <button>Далее</button>
            {correct}
        </div>
    );
};

export default Card;