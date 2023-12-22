import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import css from './LastEditions.module.css'
import slider1 from '../../assets/images/slider/slider1.jpg'
import Section from '../Section/Section'

const LastEditions = () => {
  const settingsOne = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    accessibility: false,
    draggable: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    centerMode: true,
    variableWidth: true,
  }
  const settingsTwo = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    accessibility: false,
    draggable: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    centerMode: true,
    variableWidth: true,
    rtl: true,
  }
  return (
    <Section
      sectionClass={css.slider}
      titleClass={css.sliderTitle}
      title="Poprzednie Edycje"
    >
      <div className={css.container}>
        <div>
          <Slider {...settingsOne}>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider1}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider1}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider1}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider1}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider1}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider1}
                alt="Opis zdjęcia 1"
              />
            </div>
          </Slider>
        </div>
        <div>
          <Slider {...settingsTwo}>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider1}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider1}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider1}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider1}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider1}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider1}
                alt="Opis zdjęcia 1"
              />
            </div>
          </Slider>
        </div>
      </div>
    </Section>
  )
}

export default LastEditions
