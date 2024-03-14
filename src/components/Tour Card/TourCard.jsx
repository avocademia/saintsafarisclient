import { FaStar } from 'react-icons/fa';
import style from "./TourCard.module.css"
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar className="stars" key={i} style={{ fill: "#ffb700" }} />);
      } else {
        stars.push(<FaStar className="stars" key={i} />);
      }
    }
    return stars;
  };

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.attributes.rating, 0);
    return totalRating / reviews.length;
  };

  return (
    <article className={style.card} key={tour.id} >
      <div className={style.imageContainer} key={tour.id}>
        <img src={`http://localhost:1337${tour.attributes.display_picture.data.attributes.url}`} alt={tour.attributes.title}/>
      </div>
      <div className={style.textContainer}>
        <h1 className={style.cardTitle}>{tour.attributes.title.toUpperCase()}</h1>
        <p className={style.cardDescription}>{tour.attributes.description.substring(0, 150)}...</p>
      </div>
      <div className={style.starContainer}>
        {renderStars(calculateAverageRating(tour.attributes.reviews.data))}
      </div>
      <span className={style.totalReviews}>({tour.attributes.reviews.data.length})</span>
      <button className={style.cardButton}>
        <Link className={style.cardLink} to={`tour/${tour.id}`}>Details</Link>
      </button>
    </article>
  );
};

export default TourCard;
