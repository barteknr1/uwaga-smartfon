import {useState, useEffect} from 'react'
import Section from '../Section/Section'
import css from './Program.module.css'
import sprite from '../../assets/svg/sprite.svg'

const Program = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 756)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 756)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <Section sectionClass={css.program}>
      <div className={css.container}>
        <div className={css.titleContainer}>
          <h1 className={css.programTitle}>Program</h1>
          <h2 className={css.programSubTitle}>4 kwietnia 2024</h2>
        </div>

        <div className={css.scheduleContainer}>
          {isMobileView ? (
            <div className={css.singleSchedule}>
              <div className={css.scheduleMobile}>
                <h4 className={css.scheduleTime}>13:45</h4>
                <svg className={css.scheduleSvg}>
                  <use href={sprite + '#icon-down'} />
                </svg>
              </div>
              <p className={css.scheduleText}>
                Lorem ipsum dolor sit amet consectetur. Arcu mi nunc at
                nascetur.
              </p>
            </div>
          ) : (
            <div className={css.singleSchedule}>
              <div className={css.scheduleTablet}>
                <h4 className={css.scheduleTime}>13:45</h4>
                <p className={css.scheduleText}>
                  Lorem ipsum dolor sit amet consectetur. Arcu mi nunc at
                  nascetur.
                </p>
                <svg className={css.scheduleSvg}>
                  <use href={sprite + '#icon-down'} />
                </svg>
              </div>
            </div>
          )}
          {isMobileView ? (
            <div className={css.singleSchedule}>
              <div className={css.scheduleMobile}>
                <h4 className={css.scheduleTime}>13:45</h4>
                <svg className={css.scheduleSvg}>
                  <use href={sprite + '#icon-down'} />
                </svg>
              </div>
              <p className={css.scheduleText}>
                Lorem ipsum dolor sit amet consectetur. Arcu mi nunc at
                nascetur.
              </p>
            </div>
          ) : (
            <div className={css.singleSchedule}>
              <div className={css.scheduleTablet}>
                <h4 className={css.scheduleTime}>13:45</h4>
                <p className={css.scheduleText}>
                  Lorem ipsum dolor sit amet consectetur. Arcu mi nunc at
                  nascetur.
                </p>
                <svg className={css.scheduleSvg}>
                  <use href={sprite + '#icon-down'} />
                </svg>
              </div>
            </div>
          )}
          {isMobileView ? (
            <div className={css.singleSchedule}>
              <div className={css.scheduleMobile}>
                <h4 className={css.scheduleTime}>13:45</h4>
                <svg className={css.scheduleSvg}>
                  <use href={sprite + '#icon-down'} />
                </svg>
              </div>
              <p className={css.scheduleText}>
                Lorem ipsum dolor sit amet consectetur. Arcu mi nunc at
                nascetur.
              </p>
            </div>
          ) : (
            <div className={css.singleSchedule}>
              <div className={css.scheduleTablet}>
                <h4 className={css.scheduleTime}>13:45</h4>
                <p className={css.scheduleText}>
                  Lorem ipsum dolor sit amet consectetur. Arcu mi nunc at
                  nascetur.
                </p>
                <svg className={css.scheduleSvg}>
                  <use href={sprite + '#icon-down'} />
                </svg>
              </div>
            </div>
          )}
          {isMobileView ? (
            <div className={css.singleSchedule}>
              <div className={css.scheduleMobile}>
                <h4 className={css.scheduleTime}>13:45</h4>
                <svg className={css.scheduleSvg}>
                  <use href={sprite + '#icon-down'} />
                </svg>
              </div>
              <p className={css.scheduleText}>
                Lorem ipsum dolor sit amet consectetur. Arcu mi nunc at
                nascetur.
              </p>
            </div>
          ) : (
            <div className={css.singleSchedule}>
              <div className={css.scheduleTablet}>
                <h4 className={css.scheduleTime}>13:45</h4>
                <p className={css.scheduleText}>
                  Lorem ipsum dolor sit amet consectetur. Arcu mi nunc at
                  nascetur.
                </p>
                <svg className={css.scheduleSvg}>
                  <use href={sprite + '#icon-down'} />
                </svg>
              </div>
            </div>
          )}
          {isMobileView ? (
            <div className={css.singleSchedule}>
              <div className={css.scheduleMobile}>
                <h4 className={css.scheduleTime}>13:45</h4>
                <svg className={css.scheduleSvg}>
                  <use href={sprite + '#icon-down'} />
                </svg>
              </div>
              <p className={css.scheduleText}>
                Lorem ipsum dolor sit amet consectetur. Arcu mi nunc at
                nascetur.
              </p>
            </div>
          ) : (
            <div className={css.singleSchedule}>
              <div className={css.scheduleTablet}>
                <h4 className={css.scheduleTime}>13:45</h4>
                <p className={css.scheduleText}>
                  Lorem ipsum dolor sit amet consectetur. Arcu mi nunc at
                  nascetur.
                </p>
                <svg className={css.scheduleSvg}>
                  <use href={sprite + '#icon-down'} />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

export default Program
