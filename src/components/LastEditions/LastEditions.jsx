import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import css from './LastEditions.module.css'
import slider1 from '../../assets/images/slider/slider1.jpg'
import slider2 from '../../assets/images/slider/slider2.jpg'
import slider3 from '../../assets/images/slider/slider3.jpg'
import slider4 from '../../assets/images/slider/slider4.jpg'
import slider5 from '../../assets/images/slider/slider5.jpg'
import slider6 from '../../assets/images/slider/slider6.jpg'
import slider7 from '../../assets/images/slider/slider7.jpg'
import slider8 from '../../assets/images/slider/slider8.jpg'
import slider9 from '../../assets/images/slider/slider9.jpg'
import slider10 from '../../assets/images/slider/slider10.jpg'
import slider11 from '../../assets/images/slider/slider11.jpg'
import slider12 from '../../assets/images/slider/slider12.jpg'
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
    lazyLoad: true,
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
    lazyLoad: true,
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
                src={slider2}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider3}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider4}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider5}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider6}
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
                src={slider12}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider11}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider10}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider9}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider8}
                alt="Opis zdjęcia 1"
              />
            </div>
            <div className={css.slideBox}>
              <img
                className={css.slideImg}
                src={slider7}
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
