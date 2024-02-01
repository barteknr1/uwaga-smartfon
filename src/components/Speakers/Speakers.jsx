import {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'
import 'swiper/css/bundle'
import Section from '../Section/Section'
import speakersData from './SpeakersList'
import sprite from '../../assets/svg/sprite.svg'

import css from './Speakers.module.css'
import './styles.css'
import {useModal} from '../Modal/ModalProvider'

const Speakers = () => {
  const {t} = useTranslation()
  const {openModal, setModalContent, isModalVisible} = useModal()
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  const handleSpeakerClick = (speaker) => {
    setSelectedSpeaker(speaker)
    setModalContent(
      <div className={css.speakersModalContainer}>
        <div className={css.speakerImgBox}>
          <img className={css.speakerModalImg} src={speaker.img} />
          <svg className={css.speakerSvg}>
            <use href={sprite + '#speakersSvg'} />
          </svg>
        </div>
        <div className={css.speakerAboutBox}>
          {t(`speakers.about.${speaker.id}`, {
            returnObjects: true,
          }).map((paragraph, index) => (
            <p className={css.speakerAboutText} key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    )
    openModal()
  }

  useEffect(() => {
    if (!isModalVisible) {
      setSelectedSpeaker(null)
    }
  }, [isModalVisible])

  return (
    <Section
      id="speakers"
      sectionClass={
        selectedSpeaker
          ? `${css.speakers} ${css.speakersModalIsOpen}`
          : css.speakers
      }
      titleClass={css.speakersTitle}
      title={t('speakers.title')}
    >
      <div className={css.speakersContainer}>
        <Swiper
          grabCursor={true}
          spaceBetween={40}
          breakpoints={{
            765: {
              spaceBetween: 20,
            },
            1280: {
              spaceBetween: 32,
            },
          }}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          pagination={false}
          modules={[Pagination]}
          className="swiperSpeakers"
        >
          {speakersData.map((speaker) => (
            <SwiperSlide
              onClick={() => handleSpeakerClick(speaker)}
              key={speaker.id}
            >
              <div className={css.speakersBox}>
                <img
                  className={css.speakerImg}
                  src={speaker.img}
                  alt={speaker.name}
                />
                <div className={css.speakerText}>
                  <p className={css.speakerName}>{speaker.name}</p>
                  <p className={css.speakerTitle}>{speaker.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  )
}

export default Speakers
