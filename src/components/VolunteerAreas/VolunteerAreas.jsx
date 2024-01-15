import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper/modules'
import Section from '../Section/Section'
import Areas from './areasList'
import './styles.css'
import 'swiper/css/bundle'
import css from './VolunteerAreas.module.css'

const VolunteerAreas = () => {
  return (
    <Section
      sectionClass={css.volunteerAreas}
      titleClass={css.volunteerAreasTitle}
      title="Obszary działania wolontariatu"
    >
      <div className={css.volunteerAreasContainer}>
        <div className={css.sliderContainer}>
          <Swiper
            spaceBetween={32}
            slidesPerView={'auto'}
            loop={true}
            centeredSlides={true}
            pagination={false}
            navigation={false}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {Areas.map((item, index) => (
              <SwiperSlide key={index}>{item}</SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={css.listContainer}>
          {Areas.map((item) => (
            <div key={item.key}>{item}</div>
          ))}
        </div>
        <p className={css.volunteerAreasText}>
          Oraz wiele innych, o których teraz nawet nie pomyśleliśmy.
        </p>
      </div>
    </Section>
  )
}

export default VolunteerAreas
