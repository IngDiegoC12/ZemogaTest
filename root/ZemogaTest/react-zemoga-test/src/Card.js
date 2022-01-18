import React from 'react'
import { Button } from './Button'
import "./css/Card.css"
import { useState } from "react";

function Card({like, data}) {

    const [dat, setData] = useState(data);

    const setIsLikeStatus = (like) => {
        const newData = dat;
        newData.isLike = like;
        console.log(newData);
        return setData({...dat, isLike: newData.isLike});
    };

    const updateData = async () => {
        if (dat.isLike) {
            dat.votes.positive ++;
        } else {
            dat.votes.negative ++;
        }

        // Update firebase realtime database
        try {
            await fetch(`https://test-zemoga-default-rtdb.firebaseio.com/data/${dat.id}/votes.json`, {
                method: 'PATCH',
                // headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                body: JSON.stringify(dat.votes)
            });
            setData(dat);
        } catch (error) {
            console.log(error);
        }
    };

    const getPercent = (likes, totalLikes) => {
        if(totalLikes === 0) {
            return 0;
        }

        return Math.round(likes / totalLikes * 100);
    }
    
    return (
      
        <div className="container">
        <div className="container__featured-card">
            <div className="container-card__glass-background"></div>
            <div className="container-card__content">
                <p className="container-card__hairline"></p>
                <h2 className="container-card__title">{dat.name}</h2>
                <p className="container-card__desc">
                    {dat.description}
                </p>
                
                <p className="container-card__cta">
                    {dat.category}
                </p>
                <div className="container-card__buttons">
                    <button className="icon-button" aria-label="thumbs up" onClick={() => setIsLikeStatus(true)}>
                        <img src={like.imgThumbsUp} alt="thumbs up" />
                    </button>
                    <button className="icon-button" aria-label="thumbs down" onClick={() => setIsLikeStatus(false)}>
                       <img src={like.imgThumbsDown} alt="thumbs down"  />
                    </button>
                    <Button buttonSize='btn--wide' buttonColor='primary' onChildClick={updateData}>Vote Now</Button>
                </div>
                <div className="container-Porcentage">
                <div>Likes: {dat.votes.positive} ({getPercent(dat.votes.positive, (dat.votes.positive + dat.votes.negative))} %)</div>
                <div>dislikes: {dat.votes.negative} ({getPercent(dat.votes.negative, (dat.votes.positive + dat.votes.negative))} %)</div>
                </div>
            </div>
        </div>
    </div>
    
    
    )
}

export default Card
