import { keyboardKey } from "@testing-library/user-event";

const keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

type KeyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    disabled?: boolean
    addGuessedLetter: (letter: string) => void
}

const Keyboard = ({ activeLetters, disabled = false, inactiveLetters, addGuessedLetter }: KeyboardProps) => {
     
    return(
        <div className='keyboardWrapper'>
            {keys.map(key => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={`${'keyboardButton'} ${isActive ? 'active' : ''}
                        ${
                          isInactive ? 'inactive' : ''
                        }`}
                        disabled={isInactive || isActive || disabled}
                        key={key}
                    >
                        {key}
                    </button>)
            })}
        </div>
    )
}

export default Keyboard;