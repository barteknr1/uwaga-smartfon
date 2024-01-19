import Section from '../Section/Section'
import css from './DearVolunteer.module.css'
import sprite from '../../assets/svg/sprite.svg'

const DearVolunteer = () => {
  return (
    <Section
      sectionClass={css.dearVolunteer}
      titleClass={css.dearVolunteerTitle}
      title="Szanowni wolontariusze!"
    >
      <div className={css.container}>
        <div className={css.textWrapper}>
          <div className={css.textBox}>
            <p className={css.dearVolunteerText}>
              Chcielibyśmy wyrazić ogromną wdzięczność za Waszą nieocenioną
              pracę na rzecz Konferencji &quot;Uwaga! Smartfon&quot;. Wasze
              poświęcenie, entuzjazm i profesjonalizm wniosły niezwykły wkład w
              sukces tego wydarzenia. Dzięki Waszej gotowości do działania
              kolejna edycja wydarzenia zapowiada się profesjonalnie, z mnóstwem
              inspiracji i pozytywnej energii.
            </p>
            <p className={css.dearVolunteerText}>
              Serdeczne podziękowania kierujemy także do współautorów Home Page
              oraz Landing Page dla wydarzenia Uwaga! Smartfon.
            </p>
            <p className={css.dearVolunteerText}>
              Zespół projektowy, który stworzył wirtualne miejsce spotkań
              uczestników, prelegentów i wolontariuszy, a także zbiór informacji
              na temat Konferencji &quot;Uwaga! Smartfon&quot; składający się z
              UX/UI Designerów oraz Developerów, dołożył swoją cegiełkę do
              propagowania świadomości i edukacji na rzecz uzależnienia dzieci i
              młodzieży od ekranów.
            </p>
          </div>
          <div className={css.textBox}>
            <p className={css.dearVolunteerText}>
              Niech ta wspólna przygoda zostawi w Was pozytywne wspomnienia oraz
              przyniesie cenne doświadczenia. Dziękujemy za każdą godzinę, każdy
              uśmiech i pomocną dłoń, którą podaliście.
            </p>
            <p className={css.dearVolunteerText}>
              Mamy nadzieję, że zechcecie do nas dołączyć również przy kolejnych
              wydarzeniach. Wasza praca jest dla nas bezcenna, a Wasze
              zaangażowanie - niezapomniane.
            </p>
            <svg className={css.dearVolunteerSvg}>
              <use href={sprite + '#icon-ILUSTRACJA'} />
            </svg>
          </div>
        </div>
      </div>
    </Section>
  )
}
export default DearVolunteer
