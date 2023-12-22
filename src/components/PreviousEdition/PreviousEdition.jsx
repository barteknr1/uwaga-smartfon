import Section from '../Section/Section'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
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
  const sliderOne = [slider1, slider2, slider3, slider4, slider5, slider6]
  const sliderTwo = [slider7, slider8, slider9, slider10, slider11, slider12]
  return (
    <Section
      sectionClass={css.slider}
      titleClass={css.sliderTitle}
      title="Poprzednie Edycje"
    >
      <div className={css.container}>
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            allowTouchMove={false}
            className="mySwiper"
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
            spaceBetween={16}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 0,
              reverseDirection: true,
              disableOnInteraction: false,
            }}
            speed={4000}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            allowTouchMove={false}
            className="mySwiper"
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
