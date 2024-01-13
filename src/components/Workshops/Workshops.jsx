import Button from '../Button/Button'
import Section from '../Section/Section'
import css from './Workshops.module.css'

const Workshops = () => {
  return (
    <Section
      sectionClass={css.workshops}
      titleClass={css.workshopsTitle}
      title="Warsztaty"
    >
      <div className={css.workshopsContainer}>
        <div className={css.workshopsBox}>
          <p className={css.workshopsText}>
            Podczas konferencji będą odbywały się{' '}
            <span className={css.boldText}> warsztaty z ekspertami</span>, na
            które serdecznie zapraszamy. Każdy z uczestników konferencji będzie
            miał możliwość uczestnictwa w jednym wybranym wykładzie. Warunkiem
            uczestnictwa jest{' '}
            <span className={css.boldText}>
              {' '}
              wysłanie formularza, w którym należy wybrać jeden z podanych
              tematów
            </span>
            .
          </p>
          <ul className={css.workshopsList}>
            <p className={css.workshopsListText}>
              Tematy warsztatów, które pojawią się podczas wydarzenia Uwaga!
              Smartfon:
            </p>
            <li className={css.workshopsListItem}>Warsztat 1</li>
            <li className={css.workshopsListItem}>Warsztat 2</li>
            <li className={css.workshopsListItem}>Warsztat 3</li>
            <li className={css.workshopsListItem}>Warsztat 4</li>
          </ul>
        </div>
        <Button variant="primary" content="Zapisz się na warsztat" />
      </div>
    </Section>
  )
}

export default Workshops
