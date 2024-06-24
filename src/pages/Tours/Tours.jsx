import BlueHeader from '../../components/Blue Header/BlueHeader';
import Footer from "../../components/Footer/Footer"
import TourCard from '../../components/Tour Card/TourCard';
import fetchTours from '../../hooks/ToursFetch';
import style from "./Tours.module.css"

const Tours = () => {
  const { data, error, loading } = fetchTours()
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <main className={style.toursPage}>
      <BlueHeader/>
      <section className={style.allTours}>
        {data.map((tour) => (
          <TourCard key={tour.id} tour={tour} tourId={tour.id} />
        ))}
      </section>
      <Footer/>
    </main>
  );
};

export default Tours;
