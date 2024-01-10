import Section from '../Section/Section'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import 'swiper/css/bundle'
import css from './Patrons.module.css'
import {
  bgk,
  bonumHumanum,
  krakow,
  nask,
  pokolenia,
  silnaWola,
} from '../../assets/images/patrons'
import Button from '../Button/Button'
import './styles.css'
import {useRef} from 'react'

const Patrons = () => {
  const swiperRef = useRef(null)
  const swiperRefTwo = useRef(null)

  const handleMouseEnter = (swiperRef) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop()
    }
  }

  const handleMouseLeave = (swiperRef) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start()
    }
  }
  const patronOne = [
    bgk,
    nask,
    pokolenia,
    krakow,
    bonumHumanum,
    silnaWola,
    bgk,
    nask,
    pokolenia,
    krakow,
    bonumHumanum,
    silnaWola,
  ]
  const patronTwo = [
    bgk,
    nask,
    pokolenia,
    krakow,
    bonumHumanum,
    silnaWola,
    bgk,
    nask,
    pokolenia,
    krakow,
    bonumHumanum,
    silnaWola,
  ]

  return (
    <Section
      sectionClass={css.patrons}
      titleClass={css.patronsTitle}
      title="Partnerzy & Patroni"
    >
      <div className={css.patronsContainer}>
        <div
          className={css.patronsBox}
          onMouseEnter={() => handleMouseEnter(swiperRef)}
          onMouseLeave={() => handleMouseLeave(swiperRef)}
        >
          <Swiper
            ref={swiperRef}
            spaceBetween={20}
            slidesPerView={'auto'}
            breakpoints={{
              835: {
                spaceBetween: 9,
              },
              1440: {
                spaceBetween: 16,
              },
            }}
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
            className="swiperPatrons"
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
        <div
          className={css.patronsBox}
          onMouseEnter={() => handleMouseEnter(swiperRefTwo)}
          onMouseLeave={() => handleMouseLeave(swiperRefTwo)}
        >
          <Swiper
            ref={swiperRefTwo}
            spaceBetween={19}
            slidesPerView={'auto'}
            breakpoints={{
              835: {
                spaceBetween: 20,
              },
              1440: {
                spaceBetween: 16,
              },
            }}
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
            className="swiperPatrons"
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
