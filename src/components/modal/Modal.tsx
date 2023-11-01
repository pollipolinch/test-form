import { showModal } from "../../utils/store/projectSlice";
import { useAppDispatch } from "../../utils/hooks/useRedux";
import style from "./modal.module.css";
import classNames from "classnames";

interface ModalProps {
  active: boolean;
  children: React.ReactNode;
}
const Modal = ({ active, children }: ModalProps) => {
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(showModal(false));
  };

  return (
    <div
      className={classNames(active ? style.modal__active : style.modal)}
      onClick={closeModal}
      aria-hidden="true"
    >
      <div
        className={classNames(
          active ? style.modal__content__active : style.modal__content
        )}
        onClick={(e) => e.stopPropagation()}
        aria-hidden="true"
      >
        <div className={style.modal_container}>
          <h5 className={style.title}>Оформление доступа</h5>
          <span className={style.cross} onClick={closeModal}></span>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;
