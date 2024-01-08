import Modal from "../Modal/Modal"
import css from "./ApplicationForm.module.css"
import Button from "../Button/Button"

const ApplicationForm = ({ type, onSubmit, formAttributes, formData }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <Modal >
      <form className={css.form} {...formAttributes} onSubmit={handleSubmit}>
        <p>Formularz zgłoszeniowy</p>
        <fieldset>
          <label htmlFor="name" className={css.name}>Imię i nazwisko</label>
          <input className={css.input} type="text" name="name" placeholder="Imię i nazwisko" required />
          <label htmlFor="email">Adres e-mail</label>
          <input className={css.input} type="email" name="email" placeholder="Adres e-mail" required />
          <label htmlFor="city">Miejscowość</label>
          <input className={css.input} type="text" name="city" placeholder="Miejscowość" required />
          <label htmlFor="role">Rola</label>
          <select className={css.input} name="role" required>
            <option value="" hidden>W konferencji uczestniczę jako</option>
            <option value="">Przedstawiciel organizacji</option>
            <option value="">Nauczyciel</option>
            <option value="">Rodzic</option>
            <option value="">Uczeń</option>
            <option value="">Inne</option>
          </select>
        </fieldset>
        <label>
          <input type="checkbox" required />
          Chcę otrzymać certyfikat uczestnictwa w konferencji Uwaga! Smartfon.
        </label>
        <label>
          <input type="checkbox" required />
          Wyrażam zgodę na przetwarzanie moich danych osobowych.
        </label>
        <p>Podczas konferencji będzie zagwarantowany ciepły posiłek. Prosimy o wybór menu zgodnie
          z preferencjami. Dziękujemy.</p>
        <label>
          <input type="radio" name="menu" value="traditional" />
          Menu tradycyjne
        </label>
        <label>
          <input type="radio" name="menu" value="vegetarian" />
          Menu wegetariańskie
        </label>
        <Button content="Wyślij formularz zgłoszeniowy" variant="secondary" />
      </form>
    </Modal>
  )
};

export default ApplicationForm