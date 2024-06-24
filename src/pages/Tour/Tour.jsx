import WhiteHeader from "../../components/White Header/WhiteHeader"
import Footer from "../../components/Footer/Footer"
import Accordion from "../../components/Tour Accordion/Accordion"
import Form from "../../components/Review Form/Form"
import quote from "../../assets/quote.png"
import user from "../../assets/user.png"
import Thankyou from "../../components/Review Form/Thankyou"
import Login from "../../components/Review Form/Login"
import useDataFetching from "../../hooks/TourFetch"
import useReviewCheck from "../../hooks/ReviewCheck"
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css'
import style from "./Tour.module.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Link, useParams } from "react-router-dom"
import { FaBed, FaSun, FaStar, FaLessThanEqual } from "react-icons/fa"
import { userData } from "../../Helpers"
import fetchReviews from "../../hooks/ReviewsFetch"
import { useState } from "react"



const Tour = () => {
  const { id } = useParams()
  const tourId = id
  const {username} = userData()
  const { data, error, loading } = useDataFetching(id)
  const isReviewAdded = useReviewCheck(id)
  const {reviews} = fetchReviews(tourId)
  const [addedNewReview, setNewReviewAdded] = useState(false);

  const handleItinerary = () => {

    toast ( "service currently unavailable", {
      hideProgressBar: true,
    })

  }

  const handleReviewSubmitted = () => {
    setNewReviewAdded(true)
    isReviewAdded
 }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const devUrl = import.meta.env.VITE_DEV_URL
  const prodUrl = import.meta.env.VITE_PROD_URL

  return (
    <main className={style.page}>
      <WhiteHeader />
      <section className={style.imageSlider}>
        <h1>{data.attributes.title}</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className={`${style.mySwiper} mySwiper`}
        >
          {data && data.attributes.media.data.map((photo) => (
            <SwiperSlide key = {photo.id} className={`${style.swiperSlider} swiperSlider`}>
              <img src={`${devUrl}${photo.attributes.url}`} alt={photo.attributes.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className={style.secondSection}>
        <article className={style.description}>
          <p>{data.attributes.description}</p>
          <div className={style.durationButtons}>
            <div className={style.duration}>
              <FaSun />
              <p>{data.attributes.days}</p>
            </div>
            <div className={style.duration}>
              <FaBed />
              <p>{data.attributes.nights}</p>
            </div>
          </div>
        </article>
        <Accordion data={data} />
        <article className={style.tourPackageButtons}>
          {/*<button onClick = {handleItinerary}>Itinerary</button>*/}
          <Link to="/tourbooking"><button>Book Now</button></Link>
        </article>
      </section>
      <section className={style.thirdSection}>
        {!isReviewAdded && !addedNewReview  && username && <Form tourId = {id} newReview = {handleReviewSubmitted}/>}
        {addedNewReview || isReviewAdded && username && <Thankyou/>}
        {!username && <Login/>}
        <article className={style.reviewSliderContainer}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 50,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className={`${style.mySwiper} mySwiper`}
          >
            {reviews.map((review) => (
              <SwiperSlide className={`${style.reviewSlider} swiperSlider`} key={review.id}>
                <div className={style.topSlideSection}>
                  <div className={style.customerProfile}>
                    <div className={style.profilePhoto}>
                      <img src={user} alt="customer profile" />
                    </div>
                    <h3>{review.first_name}</h3>
                    <h3>{review.surname}</h3>
                  </div>
                  <div className={style.quote}>
                    <img src={quote} alt="quotation" />
                  </div>
                </div>
                <div className={style.slideBottomSection}>
                  <div className={style.customerRating}>
                    {Array.from({length: review.rating}).map((_, index) => (
                      <FaStar className={style.customerStars} key={index} />
                    ))}
                  </div>
                  <p className={style.reviewBody}>{review.body}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Tour;
