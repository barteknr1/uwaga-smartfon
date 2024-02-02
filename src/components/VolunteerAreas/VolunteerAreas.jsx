import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination, Navigation} from 'swiper/modules'
import Section from '../Section/Section'
import Areas from './Areas'
import './styles.css'
import 'swiper/css/bundle'
import css from './VolunteerAreas.module.css'
import {useTranslation} from 'react-i18next'

const VolunteerAreas = () => {
  const {t} = useTranslation()
  const areas = Areas()

  return (
    <Section
      sectionClass={css.volunteerAreas}
      titleClass={css.volunteerAreasTitle}
      title={t('areas.title')}
      id="volunteering_areas"
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
            {areas.map((area, index) => (
              <SwiperSlide key={index}>{area}</SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={css.listContainer}>
          {areas.map((area, index) => (
            <div key={index}>{area}</div>
          ))}
        </div>
        <p className={css.volunteerAreasText}>{t('areas.text')}</p>
      </div>
    </Section>
  )
}

export default VolunteerAreas
