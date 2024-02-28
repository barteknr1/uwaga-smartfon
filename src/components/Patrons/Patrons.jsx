import {useTranslation} from 'react-i18next'
import {useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'
import Section from '../Section/Section'
import Support from '../Support/Support'
import Button from '../Button/Button'
import 'swiper/css/bundle'
import css from './Patrons.module.css'
import {
  bgk,
  nask,
  pokolenia,
  krakow,
  bonumHumanum,
  silnaWola,
  iris,
  iworis,
  cps,
  oaza,
  pti,
  pktsKrzywe,
  szpitalBabinskiego,
  tarczaPFR,
} from '../../assets/images/patrons'
import './styles.css'

const Patrons = () => {
  const {t} = useTranslation()
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
    {
      img: bgk,
      site: 'https://www.bgk.pl/',
    },
    {
      img: nask,
      site: 'https://www.nask.pl/',
    },
    {
      img: pokolenia,
      site: 'https://instytutpokolenia.pl/',
    },
    {
      img: krakow,
      site: 'https://www.krakow.pl/',
    },
    {
      img: bonumHumanum,
      site: 'https://bonumhumanum.pl/',
    },
    {
      img: silnaWola,
      site: 'https://silnawola.pl/',
    },
    {
      img: iris,
      site: 'https://iris.edu.pl/',
    },

    // DUBEL 1
    {
      img: bgk,
      site: 'https://www.bgk.pl/',
    },
    {
      img: nask,
      site: 'https://www.nask.pl/',
    },
    {
      img: pokolenia,
      site: 'https://instytutpokolenia.pl/',
    },
    {
      img: krakow,
      site: 'https://www.krakow.pl/',
    },
    {
      img: bonumHumanum,
      site: 'https://bonumhumanum.pl/',
    },
    {
      img: silnaWola,
      site: 'https://silnawola.pl/',
    },
    {
      img: iris,
      site: 'https://iris.edu.pl/',
    },
    // DUBEL 2
    {
      img: bgk,
      site: 'https://www.bgk.pl/',
    },
    {
      img: nask,
      site: 'https://www.nask.pl/',
    },
    {
      img: pokolenia,
      site: 'https://instytutpokolenia.pl/',
    },
    {
      img: krakow,
      site: 'https://www.krakow.pl/',
    },
    {
      img: bonumHumanum,
      site: 'https://bonumhumanum.pl/',
    },
    {
      img: silnaWola,
      site: 'https://silnawola.pl/',
    },
    {
      img: iris,
      site: 'https://iris.edu.pl/',
    },
    // DUBEL 3
    {
      img: bgk,
      site: 'https://www.bgk.pl/',
    },
    {
      img: nask,
      site: 'https://www.nask.pl/',
    },
    {
      img: pokolenia,
      site: 'https://instytutpokolenia.pl/',
    },
    {
      img: krakow,
      site: 'https://www.krakow.pl/',
    },
    {
      img: bonumHumanum,
      site: 'https://bonumhumanum.pl/',
    },
    {
      img: silnaWola,
      site: 'https://silnawola.pl/',
    },
    {
      img: iris,
      site: 'https://iris.edu.pl/',
    },
  ]
  const patronTwo = [
    {
      img: iworis,
      site: 'https://iworis.pl/',
    },
    {
      img: cps,
      site: 'https://cps.edu.pl/',
    },
    {
      img: oaza,
      site: '',
    },
    {
      img: pti,
      site: 'https://portal.pti.org.pl/',
    },
    {
      img: pktsKrzywe,
      site: 'https://www.ptks.pl/',
    },
    {
      img: szpitalBabinskiego,
      site: 'https://stara.babinski.pl/',
    },
    {
      img: tarczaPFR,
      site: 'https://polskieforumrodzicow.pl/',
    },
    // DUBEL 1
    {
      img: iworis,
      site: 'https://iworis.pl/',
    },
    {
      img: cps,
      site: 'https://cps.edu.pl/',
    },
    {
      img: oaza,
      site: '',
    },
    {
      img: pti,
      site: 'https://portal.pti.org.pl/',
    },
    {
      img: pktsKrzywe,
      site: 'https://www.ptks.pl/',
    },
    {
      img: szpitalBabinskiego,
      site: 'https://stara.babinski.pl/',
    },
    {
      img: tarczaPFR,
      site: 'https://polskieforumrodzicow.pl/',
    },
    // DUBEL 2
    {
      img: iworis,
      site: 'https://iworis.pl/',
    },
    {
      img: cps,
      site: 'https://cps.edu.pl/',
    },
    {
      img: oaza,
      site: '',
    },
    {
      img: pti,
      site: 'https://portal.pti.org.pl/',
    },
    {
      img: pktsKrzywe,
      site: 'https://www.ptks.pl/',
    },
    {
      img: szpitalBabinskiego,
      site: 'https://stara.babinski.pl/',
    },
    {
      img: tarczaPFR,
      site: 'https://polskieforumrodzicow.pl/',
    },
    // DUBEL 3
    {
      img: iworis,
      site: 'https://iworis.pl/',
    },
    {
      img: cps,
      site: 'https://cps.edu.pl/',
    },
    {
      img: oaza,
      site: '',
    },
    {
      img: pti,
      site: 'https://portal.pti.org.pl/',
    },
    {
      img: pktsKrzywe,
      site: 'https://www.ptks.pl/',
    },
    {
      img: szpitalBabinskiego,
      site: 'https://stara.babinski.pl/',
    },
    {
      img: tarczaPFR,
      site: 'https://polskieforumrodzicow.pl/',
    },
  ]

  return (
    <Section
      sectionClass={css.patrons}
      titleClass={css.patronsTitle}
      title={t('patrons.title')}
      id="patrons"
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
                {slider.site ? (
                  <a href={slider.site} rel="noreferrer" target="_blank">
                    <img
                      className={css.patronsImg}
                      src={slider.img}
                      alt={`patron logo ${index + 1}`}
                    />
                  </a>
                ) : (
                  <img
                    className={css.patronsImg}
                    src={slider.img}
                    alt={`patron logo ${index + 1}`}
                  />
                )}
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
              765: {
                spaceBetween: 20,
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
                {slider.site ? (
                  <a href={slider.site} rel="noreferrer" target="_blank">
                    <img
                      className={css.patronsImg}
                      src={slider.img}
                      alt={`patron logo ${index + 1}`}
                    />
                  </a>
                ) : (
                  <img
                    className={css.patronsImg}
                    src={slider.img}
                    alt={`patron logo ${index + 1}`}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Support />
      </div>
    </Section>
  )
}
export default Patrons
