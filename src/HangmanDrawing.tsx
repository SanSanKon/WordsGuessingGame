import { v4 as uuidV4 } from 'uuid';

const Head = (
    <div className="head" key={uuidV4()}></div>
);

const Body = (
    <div className="body" key={uuidV4()}></div>
);

const RightArm = (
    <div className="rightArm" key={uuidV4()}></div>
);

const LeftArm = (
    <div className="leftArm" key={uuidV4()}></div>
);

const RightLeg = (
    <div className="rightLeg" key={uuidV4()}></div>
);

const LeftLeg = (
    <div className="leftLeg" key={uuidV4()}></div>
);

type HangmanDrawingProps = {
    numberOfGuesses: number
};

const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {

    return (
        <div className="drawingWrapper">
            {bodyParts.slice(0, numberOfGuesses)}
            <div className="topVerticalLine"></div>
            <div className="topHorizontalLine"></div>
            <div className="verticalLine"></div>
            <div className="bottomHorizontalLine"></div>
        </div>
    )
}

export default HangmanDrawing;