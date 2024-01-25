import {useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'
import 'swiper/css/bundle'

import Modal from '../Modal/Modal'
import Section from '../Section/Section'
import speakers from './SpeakersList.json'
import sprite from '../../assets/svg/sprite.svg'

import css from './Speakers.module.css'
import './styles.css'

const Speakers = () => {
  const [isModalVisible, setIsModalVisible] = useState(true)
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const toggleModal = (speaker) => {
    setSelectedSpeaker(speaker)
    setIsModalVisible(!isModalVisible)
  }

  return (
    <Section
      sectionClass={css.speakers}
      titleClass={css.speakersTitle}
      title="Prelegenci"
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
            <div className={css.speakersModalContainer}>
              <div className={css.speakerImgBox}>
                <img
                  className={css.speakerModalImg}
                  src={selectedSpeaker.img}
                />
                <svg className={css.speakerSvg}>
                  <use href={sprite + '#speakersSvg'} />
                </svg>
              </div>
              <div className={css.speakerAboutBox}>
                {selectedSpeaker.about.map((paragraph, index) => (
                  <p className={css.speakerAboutText} key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </Section>
  )
}

export default Speakers
