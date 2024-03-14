import BlueHeader from '../../components/Blue Header/BlueHeader';
import Footer from "../../components/Footer/Footer"
import TourCard from '../../components/Tour Card/TourCard';
import useDataFetching from '../../hooks/TourFetch';
import style from "./Tours.module.css"

const Tours = () => {
  const { data, error, loading } = useDataFetching("http://localhost:1337/api/tours?populate[media]=true&populate[display_picture]=true&populate[reviews][populate][user]=true");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <main className={style.toursPage}>
      <BlueHeader/>
      <section className={style.allTours}>
        {data.map((tour) => (
          <TourCard key={tour.id} tour={tour}/>
        ))}
      </section>
      <Footer/>
    </main>
  );
};

export default Tours;
