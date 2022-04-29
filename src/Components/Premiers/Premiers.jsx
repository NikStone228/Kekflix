import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import Typography from "@mui/material/Typography";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Solo from "../Solo/Solo";

const Premiers = ({ premiers }) => {
  return (
    <div>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        style={{ color: "white" }}
      >
        Топ 250
      </Typography>
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
        {premiers.map((trend) => (
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

export default Premiers;
