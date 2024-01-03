import Section from '../Section/Section'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css/bundle'
import css from './Patrons.module.css'
import {bgk, nask, pokolenia} from '../../assets/images/patrons'
import Button from '../Button/Button'

const Patrons = () => {
  const patronOne = [
    bgk,
    nask,
    pokolenia,
    bgk,
    nask,
    pokolenia,
    bgk,
    nask,
    pokolenia,
  ]
  const patronTwo = [
    bgk,
    nask,
    pokolenia,
    bgk,
    nask,
    pokolenia,
    bgk,
    nask,
    pokolenia,
  ]

  return (
    <Section
      sectionClass={css.patrons}
      titleClass={css.patronsTitle}
      title="Partnerzy & Patroni"
    >
      <div className={css.patronsContainer}>
        <div className={css.patronsBox}>
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              394: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            loop={true}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            speed={4000}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            allowTouchMove={false}
            className="patronsSwiper"
          >
            {patronTwo.map((slider, index) => (
              <SwiperSlide key={index}>
                <img
                  className={css.patronsImg}
                  src={slider}
                  alt={`patron logo ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={css.patronsBox}>
          <Swiper
            spaceBetween={19}
            slidesPerView={2}
            breakpoints={{
              394: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            loop={true}
            autoplay={{
              delay: 0,
              reverseDirection: true,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={4000}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            allowTouchMove={false}
            className="patronsSwiper"
          >
            {patronOne.map((slider, index) => (
              <SwiperSlide key={index}>
                <img
                  className={css.patronsImg}
                  src={slider}
                  alt={`patron logo ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button variant="support" content="Wesprzyj"></Button>
      </div>
    </Section>
  )
}
export default Patrons
