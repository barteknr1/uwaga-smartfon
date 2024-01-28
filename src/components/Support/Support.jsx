import css from "./Support.module.css"
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { useModal } from "../Modal/ModalProvider";


const Support = () => {
  const { t } = useTranslation();
  const { isModalVisible, setIsModalVisible, setModalContent } = useModal();

  const openModal = () => {
    setIsModalVisible(true);
    setModalContent(modalContent);
  }

  const modalContent =
    <div>
      <p>Wesprzyj naszą inicjatywę</p>
      <p>Dołącz do nas i przekaż darowiznę — tylko z Twoją pomocą może nam się to udać!</p>
      <p>Wybierz kwotę darowizny, którą chcesz przekazać:</p>
      <button type="button">35 zł</button>
      <button type="button">45 zł</button>
      <button type="button">100 zł</button>
      <button type="button">____zł</button>
    </div>
    

  return (
    <>
      <Button type="button" variant="support" content="Support" onClick={() => openModal()} />
    </>
  )
};

export default Support