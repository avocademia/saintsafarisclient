import { FaStar } from 'react-icons/fa'
import style from "./HomeCard.module.css"
import { Link } from 'react-router-dom'
import fetchReviews from "../../hooks/ReviewsFetch"
import { userData } from '../../Helpers'

const TourCard = ({ tour, tourId }) => {

  const devUrl = import.meta.env.VITE_DEV_URL
  const prodUrl = import.meta.env.VITE_PROD_URL
  
  const { reviews } = fetchReviews(tourId)

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
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / reviews.length;
  }

  return (
    <article className={style.card} key={tour.id} >
      <div className={style.imageContainer} key={tour.id}>
        <img src={`${devUrl}${tour.attributes.display_picture.data.attributes.url}`} alt={tour.attributes.title}/>
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
        <Link className={style.cardLink} to={`/tours/tour/${tour.id}`}>Details</Link>
      </button>
    </article>
  );
};

export default TourCard;
