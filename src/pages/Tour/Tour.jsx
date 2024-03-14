import WhiteHeader from "../../components/White Header/WhiteHeader";
import Footer from "../../components/Footer/Footer";
import Accordion from "../../components/Tour Accordion/Accordion"
import Form from "../../components/Review Form/Form";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useParams } from "react-router-dom";
import { useState } from "react";
import quote from "../../assets/quote.png"
import user from "../../assets/user.png"
import useDataFetching from "../../hooks/TourFetch"
import { FaBed, FaSun, FaStar } from "react-icons/fa";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';
import style from "./Tour.module.css";

const Tour = () => {
  const { id } = useParams();
  const { data, error, loading } = useDataFetching(`http://localhost:1337/api/tours/${id}?populate[media]=true&populate[display_picture]=true&populate[reviews][populate][user]=true/`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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
            <SwiperSlide className={`${style.swiperSlider} swiperSlider`} key={photo.id}>
              <img src={`http://localhost:1337${photo.attributes.url}`} alt={photo.attributes.name} />
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
          <button>Itinerary</button>
          <button>Book Now</button>
        </article>
      </section>
      <section className={style.thirdSection}>
        <Form />
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
            {data && data.attributes.reviews.data.map((review) => (
              <SwiperSlide className={`${style.reviewSlider} swiperSlider`} key={review.id}>
                <div className={style.topSlideSection}>
                  <div className={style.customerProfile}>
                    <div className={style.profilePhoto}>
                      <img src={user} alt="customer profile" />
                    </div>
                    <h3>{review.attributes.user.data.attributes.first_name}</h3>
                    <h3>{review.attributes.user.data.attributes.surname}</h3>
                  </div>
                  <div className={style.quote}>
                    <img src={quote} alt="quotation" />
                  </div>
                </div>
                <div className={style.slideBottomSection}>
                  <div className={style.customerRating}>
                    {Array.from({ length: review.attributes.rating }).map((_, index) => (
                      <FaStar className={style.customerStars} key={index} />
                    ))}
                  </div>
                  <p className={style.reviewBody}>{review.attributes.body}</p>
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
