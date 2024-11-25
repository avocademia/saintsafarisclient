import { FaStar } from 'react-icons/fa'
import style from "./TourCard.module.css"
import { Link } from 'react-router-dom'
import fetchReviews from "../../hooks/ReviewsFetch"
import { useEffect, useState } from 'react'

const TourCard = ({ tour, tourId }) => {

  const [reviews, setReviews] = useState({length: 0})
  useEffect(()=> {
    const getReviews = async () => {
      try {
        const data = await fetchReviews(tourId)
        setReviews(data)
      } catch (error) {
        throw error
      }
    }
    getReviews()
  }, [tourId])

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} className={style.selected} />)
      } else {
        stars.push(<FaStar className={style.star} key={i} />)
      }
    }
    return stars
  }

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0)
    return totalRating / reviews.length;
  }

  const devUrl = import.meta.env.VITE_DEV_URL
  const prodUrl = import.meta.env.VITE_PROD_URL

  return (
    <Link key={tour.id} className={style.cardLink} to={`tour/${tour.id}`}>
      <article className={style.card} >
        <div className={style.imageContainer} key={tour.id}>
          <img src={`${import.meta.env.NODE_ENV === 'production'? prodUrl : devUrl}${tour.attributes.display_picture.data.attributes.url}`} alt={tour.attributes.title}/>
        </div>
        <div className={style.textContainer}>
          <h1 className={style.cardTitle}>{tour.attributes.title.toUpperCase()}</h1>
          <p className={style.cardDescription}>{tour.attributes.description.substring(0, 150)}...</p>
        </div>
        <div className={style.starContainer}>
          {renderStars(calculateAverageRating(reviews))}
        </div>
        <span className={style.totalReviews}>{`(${reviews.length})`}</span>
        <button className={style.cardButton}>
          Details
        </button>
      </article>
    </Link>
  )
}

export default TourCard;
