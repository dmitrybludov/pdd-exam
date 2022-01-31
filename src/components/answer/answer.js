import React, {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import './answer.css';

const Answer = ({question, value, getAnswerForCheck}) => {
    const [selectedAnswer, setSelectedAnswer] = useState();

    const getId = uuidv4();

    const selectedAnswerFromInput = () => {
        setSelectedAnswer(value)
        console.log(selectedAnswer)
    }

    // const style = {
    //     background: correctAnswer ? 'green' : 'white'
    // }

    return (
        <label className="answer" htmlFor={getId} onClick={() => {
            selectedAnswerFromInput();
            getAnswerForCheck(selectedAnswer);
        }}>
            <input type="radio" id={getId} name="answer" value={value}/>
            <span>{question}</span>
        </label>
    );
};

export default Answer;