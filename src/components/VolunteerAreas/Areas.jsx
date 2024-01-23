import {useTranslation} from 'react-i18next'
import sprite from '../../assets/svg/sprite.svg'
import css from './VolunteerAreas.module.css'

const areasList = [
  {
    key: '1',
    textKey: 'areas.list.strategySocialMedia',
    svg: '#icon-social-media-research',
  },
  {
    key: '2',
    textKey: 'areas.list.createContent',
    svg: '#icon-social-media',
  },
  {
    key: '3',
    textKey: 'areas.list.moderationMedia',
    svg: '#icon-laptop-reading',
  },
  {
    key: '4',
    textKey: 'areas.list.foundationOfficeWork',
    svg: '#icon-projektpl-office',
  },
  {
    key: '5',
    textKey: 'areas.list.organizeEvent',
    svg: '#icon-work-on-uwagasmatfon',
  },
  {
    key: '6',
    textKey: 'areas.list.promoteEvent',
    svg: '#icon-uwagasmartfon',
  },
  {
    key: '7',
    textKey: 'areas.list.actionsDuringConference',
    svg: '#icon-wave',
  },
  {
    key: '8',
    textKey: 'areas.list.assistResearch',
    svg: '#icon-research',
  },
]

const Areas = () => {
  const {t} = useTranslation()

  return areasList.map(({key, textKey, svg}) => (
    <div key={key} className={css.itemBox}>
      <svg className={css.svgAreasIcon}>
        <use href={sprite + svg} />
      </svg>
      <p className={css.areasText}>{t(`${textKey}`)}</p>
    </div>
  ))
}

export default Areas
