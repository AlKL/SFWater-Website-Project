import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
// import yBottle from '../../images/yBottle.png';

const FlipCard = ({ image, backImage, desc }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className='flip-card'>
                {/* <p>FRONT OF CARD</p> */}
                <button onClick={handleFlip} className='flip-btn'>
                    <div className='card-text'>
                        <p>{desc}</p>
                    </div>
                    <div className='card-img'>
                        <img src={image}></img>
                    </div>
                </button>
            </div>

            <div className='flip-card'>
                {/* <p>BACK OF CARD</p> */}
                <button onClick={handleFlip} className='flip-btn'>
                    <div className='card-text'>
                        <p>BACK</p>
                    </div>
                    <div className='card-img'>
                        <img src={backImage}></img>
                    </div>
                </button>
            </div>
        </ReactCardFlip>
    );
};

export default FlipCard;