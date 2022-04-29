import "./Trends.css";
import Solo from "../Solo/Solo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Trends = ({ trends }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {trends.map((trend) => (
          <SwiperSlide key={trend.filmId}>
            <Solo
              poster={trend.posterUrlPreview}
              name={trend.nameRu}
              rating={trend.rating}
              year={trend.year}
              id={trend.filmId}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trends;
