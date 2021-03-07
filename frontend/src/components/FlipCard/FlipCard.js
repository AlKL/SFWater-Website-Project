import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
// import yBottle from '../../images/yBottle.png';

const FlipCard = ({ image, backImage, desc, price }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div className='flip-card'>
                <div onClick={handleFlip} className='flip-btn'>
                    <div className='card-img'>
                        <img src={image}></img>
                    </div>
                    <div className='card-text'>
                        <p>{desc}</p>
                    </div>
                    <div className='card-price'>
                        <p>{price}</p>
                    </div>
                </div>
            </div>

            <div className='flip-card'>
                <div>
                    <div onClick={handleFlip} className='flip-btn'>
                        <div className='card-img'>
                            <img src={backImage}></img>
                        </div>
                        <div className='card-text'>
                            <p>{desc}</p>
                        </div>
                        <div className='card-price'>
                            <p>{price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </ReactCardFlip>
    );
};

export default FlipCard;