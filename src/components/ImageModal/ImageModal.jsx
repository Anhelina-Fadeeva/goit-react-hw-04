import Modal from 'react-modal';
import s from './ImageModal.module.css';

const ImageModal = ({ modalIsOpen, closeModal, imageModal }) => {
  Modal.setAppElement('#root');

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={s.modalContent} // Используем класс
        overlayClassName={s.modalOverlay} // Используем класс
        bodyOpenClassName={s.noScroll}
        contentLabel='Image Modal'
      >
        <div>
          <img
            className={s.imgModal}
            src={imageModal.url}
            alt={imageModal.name}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;