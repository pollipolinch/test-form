import {
  showModal,
  selectType,
  changeStage,
} from "../../../utils/store/projectSlice";
import { useAppDispatch } from "../../../utils/hooks/useRedux";
import style from "./modalContent.module.css";

export const StageOne = () => {
  const dispatch = useAppDispatch();
  const openStageTwo = (type: number) => {
    dispatch(selectType(type));
    dispatch(changeStage(2));
  };
  const closeModal = () => {
    dispatch(showModal(false));
  };
  return (
    <div>
      <div>
        <div className={style.type_container}>
          <p className={style.type}>Делегирование</p>
          <p onClick={() => openStageTwo(1)} className={style.type_button}>
            Оформить
          </p>
        </div>
        <div className={style.type_container}>
          <p className={style.type}>Временное замещение</p>
          <p onClick={() => openStageTwo(2)} className={style.type_button}>
            Оформить
          </p>
        </div>
        <div className={style.type_container}>
          <p className={style.type}>Техническое внесение информации</p>
          <p onClick={() => openStageTwo(3)} className={style.type_button}>
            Оформить
          </p>
        </div>
      </div>
      <div className={style.stage_footer_container}>
        <button onClick={closeModal} className={style.stage_buttonBack}>
          Отмена
        </button>
      </div>
    </div>
  );
};
