import {useTranslation} from 'react-i18next'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import Section from '../Section/Section'
import 'swiper/css/bundle'
import css from './PreviousEdition.module.css'
import './styles.css'
import {
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
  slider9,
  slider10,
  slider11,
  slider12,
} from '../../assets/images/slider'

const PreviousEdition = () => {
  const {t} = useTranslation()
  const sliderOne = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
  ]
  const sliderTwo = [
    slider7,
    slider8,
    slider9,
    slider10,
    slider11,
    slider12,
    slider7,
    slider8,
    slider9,
    slider10,
    slider11,
    slider12,
  ]
  return (
    <Section
      sectionClass={css.slider}
      titleClass={css.sliderTitle}
      title={t('previousEdition.title')}
    >
      <div className={css.container}>
        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            breakpoints={{
              765: {
                spaceBetween: 9,
              },
              1280: {
                spaceBetween: 16,
              },
            }}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={6000}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            allowTouchMove={false}
            className="previousEditionSwiper"
          >
            {sliderOne.map((slider, index) => (
              <SwiperSlide key={index}>
                <img
                  className={css.slideImg}
                  src={slider}
                  alt={`Slider photo ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            breakpoints={{
              765: {
                spaceBetween: 9,
              },
              1280: {
                spaceBetween: 16,
              },
            }}
            loop={true}
            autoplay={{
              delay: 0,
              reverseDirection: true,
              disableOnInteraction: false,
            }}
            speed={6000}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            allowTouchMove={false}
            className="previousEditionSwiper"
          >
            {sliderTwo.map((slider, index) => (
              <SwiperSlide key={index}>
                <img
                  className={css.slideImg}
                  src={slider}
                  alt={`Slider photo ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  )
}

export default PreviousEdition
