import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCoverflow, Navigation, Pagination} from 'swiper/modules'
import 'swiper/css/bundle'

import Modal from '../Modal/Modal'
import Section from '../Section/Section'
import speakers from './SpeakersList.json'

import css from './Speakers.module.css'
import './styles.css'

const Speakers = () => {
  const {t} = useTranslation()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const toggleModal = (speaker) => {
    setSelectedSpeaker(speaker)
    setIsModalVisible(!isModalVisible)
  }

  return (
    <Section
      sectionClass={css.speakers}
      titleClass={css.speakersTitle}
      title={t('speakers.title')}
    >
      <div className={css.speakersContainer}>
        <Swiper
          effect={'coverflow'}
          spaceBetween={40}
          breakpoints={{
            765: {
              spaceBetween: 20,
            },
            1280: {
              spaceBetween: 32,
            },
          }}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          centeredSlides={true}
          pagination={false}
          navigation={false}
          modules={[Navigation, Pagination, EffectCoverflow]}
          className="swiperSpeakers"
        >
          {speakers.map((speaker) => (
            <SwiperSlide onClick={() => toggleModal(speaker)} key={speaker.id}>
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
        {isModalVisible && selectedSpeaker && (
          <Modal>
            <img className={css.speakerImg} src={selectedSpeaker.img} />
            <div className={css.speakerAboutBox}>
              {t(`speakers.about.${selectedSpeaker.id}`, {
                returnObjects: true,
              }).map((paragraph, index) => (
                <p className={css.speakerAboutText} key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Modal>
        )}
      </div>
    </Section>
  )
}

export default Speakers
