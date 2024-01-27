import {useTranslation} from 'react-i18next'
import Section from '../Section/Section'
import css from './AboutVolunteer.module.css'
import {
  about_foto1,
  about_foto2,
  about_foto3,
} from '../../assets/images/AboutVolunteer'
import sprite from '../../assets/svg/sprite.svg'

const AboutVolunteer = () => {
  const {t} = useTranslation()

  return (
    <Section sectionClass={css.aboutVolunteer}>
      <div className={css.ellipse}></div>
      <div className={css.aboutVolunteerBox}>
        <div className={css.aboutVolunteerContainer}>
          <div className={css.aboutVolunteerWrapper}>
            <h3 className={css.aboutVolunteerTitle}>
              {t('aboutVolunteer.title1')}
            </h3>
            <ul className={css.aboutVolunteerList}>
              <li className={css.aboutVolunteerItem}>
                {t('aboutVolunteer.text')}{' '}
                <span className={css.bold}>
                  {t('aboutVolunteer.list1.item1.bold')}
                </span>{' '}
                {t('aboutVolunteer.list1.item1.text')}
              </li>
              <li className={css.aboutVolunteerItem}>
                {t('aboutVolunteer.text')}{' '}
                <span className={css.bold}>
                  {t('aboutVolunteer.list1.item2.bold')}
                </span>{' '}
                {t('aboutVolunteer.list1.item2.text')}
              </li>
              <li className={css.aboutVolunteerItem}>
                {t('aboutVolunteer.text')}{' '}
                <span className={css.bold}>
                  {t('aboutVolunteer.list1.item3.bold')}
                </span>{' '}
                {t('aboutVolunteer.list1.item3.text')}
              </li>
            </ul>
            <p className={css.aboutVolunteerText}>
              {t('aboutVolunteer.list1.p')}
            </p>
          </div>
          <div className={css.aboutVolunteerImgBox}>
            <img
              className={css.aboutVolunteerImg}
              src={about_foto1}
              alt="wolontariuszka"
            />
            <svg
              className={`${css.aboutVolunteerSvg} ${css.aboutVolunteerSvg1}`}
            >
              <use href={sprite + '#aboutPurple'} />
            </svg>
          </div>
        </div>
        <div className={css.aboutVolunteerContainer}>
          <div className={css.aboutVolunteerWrapper}>
            <h3 className={css.aboutVolunteerTitle}>
              {t('aboutVolunteer.title2')}
            </h3>
            <ul className={css.aboutVolunteerList}>
              <li className={css.aboutVolunteerItem}>
                <span className={css.bold}>
                  {t('aboutVolunteer.list2.item1.bold')}
                </span>{' '}
                {t('aboutVolunteer.list2.item1.text')}
              </li>
              <li className={css.aboutVolunteerItem}>
                {t('aboutVolunteer.list2.item2.text')}{' '}
                <span className={css.bold}>
                  {t('aboutVolunteer.list2.item2.bold')}
                </span>
              </li>
              <li className={css.aboutVolunteerItem}>
                <span className={css.bold}>
                  {t('aboutVolunteer.list2.item3.bold')}
                </span>{' '}
                {t('aboutVolunteer.list2.item3.text')}
              </li>
            </ul>
            <p className={css.aboutVolunteerText}>
              {t('aboutVolunteer.list2.p')}
            </p>
          </div>
          <div className={css.aboutVolunteerImgBox}>
            <img
              className={css.aboutVolunteerImg}
              src={about_foto2}
              alt="wolontariuszki Uwaga Smartfon"
            />
            <svg
              className={`${css.aboutVolunteerSvg} ${css.aboutVolunteerSvg2}   `}
            >
              <use href={sprite + '#aboutViolet'} />
            </svg>
          </div>
        </div>
        <div className={css.aboutVolunteerContainer}>
          <div className={css.aboutVolunteerWrapper}>
            <h3 className={css.aboutVolunteerTitle}>
              {t('aboutVolunteer.title3')}
            </h3>
            <ul className={css.aboutVolunteerList}>
              <li className={css.aboutVolunteerItem}>
                {t('aboutVolunteer.list3.item1.text')}{' '}
                <span className={css.bold}>
                  {t('aboutVolunteer.list3.item1.bold')}
                </span>
              </li>
              <li className={css.aboutVolunteerItem}>
                <span className={css.bold}>
                  {t('aboutVolunteer.list3.item2.bold')}
                </span>{' '}
                {t('aboutVolunteer.list3.item2.text')}
              </li>
              <li className={css.aboutVolunteerItem}>
                {t('aboutVolunteer.list3.item3.text1')}{' '}
                <span className={css.bold}>
                  {t('aboutVolunteer.list3.item3.bold')}
                </span>{' '}
                {t('aboutVolunteer.list3.item3.text2')}
              </li>
              <li className={css.aboutVolunteerItem}>
                {t('aboutVolunteer.list3.item4.text1')}{' '}
                <span className={css.bold}>
                  {t('aboutVolunteer.list3.item4.bold1')}
                </span>
                {t('aboutVolunteer.list3.item4.text2')}{' '}
                <span className={css.bold}>
                  {t('aboutVolunteer.list3.item4.bold2')}
                </span>{' '}
                {t('aboutVolunteer.list3.item4.text3')}
              </li>
            </ul>
            <p className={css.aboutVolunteerText}>
              {t('aboutVolunteer.list3.p')}{' '}
              <span className={css.bold}>{t('aboutVolunteer.list3.bold')}</span>
            </p>
          </div>
          <div className={css.aboutVolunteerImgBox}>
            <img
              className={css.aboutVolunteerImg}
              src={about_foto3}
              alt="wolontariuszki"
            />
            <svg
              className={`${css.aboutVolunteerSvg} ${css.aboutVolunteerSvg3}   `}
            >
              <use href={sprite + '#aboutPink'} />
            </svg>
          </div>
        </div>
      </div>
      <div className={css.ellipse2}></div>
    </Section>
  )
}
export default AboutVolunteer
