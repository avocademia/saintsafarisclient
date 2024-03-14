import React, { useState } from 'react';
import style from "./Form.module.css"
import { FaStar } from "react-icons/fa"

const Form = () => {
    const [rating, setRating] = useState(0); // Initialize with 0

    const handleStarClick = (index) => {
        // Add 1 to index since index starts from 0 but rating should start from 1
        setRating(index + 1);

        console.log(rating)
    };

    return (
        <div className={style.writeReview}>
            <h3>Write a review</h3>
            <form action="">
                <div className={style.rating}>
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            onClick={() => handleStarClick(index)}
                            className={`${index < rating ? style.selected : style.star}`}
                        />
                    ))}
                </div>
                <textarea name="opinion" id="" cols="30" rows="5" placeholder="Write your review" maxLength="100"></textarea>
                {/* Input field to hold the rating value */}
                <input type="hidden" name="rating" value={rating} />
                <div className={style.reviewBtns}>
                    <button className={style.submitBtn}>Submit</button>
                    <button className={style.cancelBtn}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
