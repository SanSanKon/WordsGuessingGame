import { v4 as uuidV4 } from 'uuid';

const attemptOne = (
    <div className='attempt' key={uuidV4()}></div>
);

const attemptTwo = (
    <div className='attempt' key={uuidV4()}></div>
);

const attemptThree = (
    <div className='attempt' key={uuidV4()}></div>
);

const attemptFour = (
    <div className='attempt' key={uuidV4()}></div>
);

const attemptFive = (
    <div className='attempt' key={uuidV4()}></div>
);

const attemptSix = (
    <div className='attempt' key={uuidV4()}></div>
);

type HangmanDrawingProps = {
    numberOfGuesses: number
};

const attempts = [attemptOne, attemptTwo, attemptThree, attemptFour, attemptFive, attemptSix];


const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
    
    const numberOfAttempts: number = 6;

    return (
        <div className="drawingWrapper">
            <div className='attempts'>
                <h2>You have {numberOfAttempts - numberOfGuesses} attempts to guess the word</h2>
            </div>
            <div className='attempts-wrapper'>
                {attempts.slice(0, numberOfGuesses)}
            </div>
        </div>
    )
}

export default HangmanDrawing;
