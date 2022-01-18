import React from 'react'
import { Button } from './Button'
import "./css/Card.css"

function Card({imgThumbsDown,imgThumbsUp, data}) 
{
    return (
      <div className="test">
        <div className="container">
        <div className="container__featured-card">
            <div className="container-card__glass-background"></div>
            <div className="container-card__content">
                <p className="container-card__hairline">What's your opinion on</p>
                <h2 className="container-card__title">Pope Francis?</h2>
                <p className="container-card__desc">
                    He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
                </p>
                
                <p className="container-card__cta">
                    What’s Your Veredict?
                </p>
                <div className="container-card__buttons">
                    <button className="icon-button" aria-label="thumbs up">
                        <img src={imgThumbsUp} alt="thumbs up" />
                    </button>
                    <button className="icon-button" aria-label="thumbs down" >
                        <img src={imgThumbsDown} alt="thumbs down"  />
                    </button>
                    <Button buttonSize='btn--wide' buttonColor='primary'>Vote Now</Button>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    
    )
}

export default Card
