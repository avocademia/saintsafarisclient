import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { userData} from '../../Helpers'
import style from "./Form.module.css"
import useSubmitReview from '../../hooks/ReviewSubmit';

const ReviewForm = ({tourId, reviewChecker}) => {

    const [rating, setRating] = useState(0)
    const [body, setBody] = useState('')
    const [first_name, setFirstName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const tourid = parseInt(tourId, 10)

    useEffect(() => {
        const { firstName, username, surname } = userData();
        setFirstName(firstName)
        setUsername(username)
        setSurname(surname)
    },[])

    const handleSubmit = async (event) => {
        const data = {
          first_name,
          surname,
          username,
          rating,
          body,
          tourid
        }
        event.preventDefault()
        try {
            useSubmitReview(data)
            reviewChecker(data)
        } catch (error) {
          throw error
        }
    }

    const stars = Array(5).fill(0).map((_, i) => (
      <FaStar 
        className={style.star}
        key={i}
        color={i < rating ? "#ffc107" : "#e4e5e9"}
        size={20}
        onClick={() => setRating(i + 1)}
      />
    ))

    return (
      <form onSubmit={handleSubmit} className={style.writeReview}>
        <h2>Write a review:</h2>
        <div className={style.rating}>
          {stars}
        </div>
        <textarea
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit" className={style.submitBtn}>Submit</button>
      </form>
    )
}

export default ReviewForm
