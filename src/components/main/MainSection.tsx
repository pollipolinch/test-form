import style from "./main.module.css";
import { useAppSelector, useAppDispatch } from "../../utils/hooks/useRedux";
import trash from "../../assets/img/trash.png";
import { deleteUser, showModal } from "../../utils/store/projectSlice";
import Modal from "../modal/Modal";
import { StageOne } from "../modal/modalContent/stageOne";
import { StageTwo } from "../modal/modalContent/stageTwo";
import { StageThree } from "../modal/modalContent/stageThree";
import { StageFour } from "../modal/modalContent/stageFour";

export const MainSection = () => {
  const { users, modal, stage } = useAppSelector((store) => store.ProjectSlice);
  const dispatch = useAppDispatch();
  const openModal = () => {
    dispatch(showModal(true));
  };
  const deleteUs = (id: number) => {
    dispatch(deleteUser(id));
  };
  return (
    <section className={style.section}>
      <Modal active={modal}>
        {stage === 1 && <StageOne />}
        {stage === 2 && <StageTwo />}
        {stage === 3 && <StageThree />}
        {stage === 4 && <StageFour />}
      </Modal>
      <div className={style.table_container}>
        <div className={style.table_header}>
          <p className={style.table_header_title}>Работник</p>
          <p className={style.table_header_title}>Компания</p>
          <p className={style.table_header_title}>Основание</p>
          <p className={style.table_header_title}>Дата начала</p>
          <p className={style.table_header_title}>Дата окончания</p>
          <div onClick={openModal} className={style.table_header_plus}>
            +
          </div>
        </div>
        <div className={style.table_body}>
          {users.map((user) => (
            <div className={style.table_body_user} key={user.id}>
              <div className={style.user_container}>
                <p className={style.user_name}>{user.name}</p>
                <p className={style.user_job}>{user.job}</p>
              </div>
              <p className={style.user_item}>{user.company}</p>
              <p className={style.user_item}>{user.reason}</p>
              <p className={style.user_item}>{user.dateStart}</p>
              <p className={style.user_item}>{user.dateEnd}</p>
              <img
                onClick={() => deleteUs(user.id)}
                className={style.user_trash}
                src={trash}
                alt="trash"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
