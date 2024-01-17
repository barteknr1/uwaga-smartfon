import sprite from '../../assets/svg/sprite.svg'
import css from './VolunteerAreas.module.css'

const Areas = [
  <div key="1" className={css.itemBox}>
    <svg className={css.svgAreasIcon}>
      <use href={sprite + '#icon-social-media-research'} />
    </svg>
    <p className={css.areasText}>
      Współtworzenie strategii działań na platformach społecznościowych.
    </p>
  </div>,
  <div key="2" className={css.itemBox}>
    <svg className={css.svgAreasIcon}>
      <use href={sprite + '#icon-social-media'} />
    </svg>
    <p className={css.areasText}>
      Tworzenie treści (w szczególności na Facebooku, LinkedIn, X, YouTube).
    </p>
  </div>,
  <div key="3" className={css.itemBox}>
    <svg className={css.svgAreasIcon}>
      <use href={sprite + '#icon-laptop-reading'} />
    </svg>
    <p className={css.areasText}>
      Współtworzenie strategii działań na platformach społecznościowych.
    </p>
  </div>,
  <div key="4" className={css.itemBox}>
    <svg className={css.svgAreasIcon}>
      <use href={sprite + '#icon-projektpl-office'} />
    </svg>
    <p className={css.areasText}>Współtworzenie pracy biura fundacji.</p>
  </div>,
  <div key="5" className={css.itemBox}>
    <svg className={css.svgAreasIcon}>
      <use href={sprite + '#icon-work-on-uwagasmatfon'} />
    </svg>
    <p className={css.areasText}>
      Praca przy organizowaniu wydarzenia “Uwaga! Smartfon”.
    </p>
  </div>,
  <div key="6" className={css.itemBox}>
    <svg className={css.svgAreasIcon}>
      <use href={sprite + '#icon-uwagasmartfon'} />
    </svg>
    <p className={css.areasText}>
      Propagowanie wydarzenia w swojej społeczności lokalnej, w obrębie szkoły,
      w kołach zainteresowań.
    </p>
  </div>,
  <div key="7" className={css.itemBox}>
    <svg className={css.svgAreasIcon}>
      <use href={sprite + '#icon-wave'} />
    </svg>
    <p className={css.areasText}>
      Działania podczas konferencji, takie jak: przyjmowanie uczestników i
      dbanie o komunikację między gośćmi konferencji.
    </p>
  </div>,
  <div key="8" className={css.itemBox}>
    <svg className={css.svgAreasIcon}>
      <use href={sprite + '#icon-research'} />
    </svg>
    <p className={css.areasText}>
      Pomoc w przeprowadzaniu badań oraz tworzeniu raportów na temat
      uzależnienia młodzieży od smartfonów.
    </p>
  </div>,
]

export default Areas
