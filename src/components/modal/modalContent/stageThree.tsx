import { changeStage } from "../../../utils/store/projectSlice";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/useRedux";
import style from "./modalContent.module.css";
import { useState } from "react";
import { addNewUserTwo } from "../../../utils/store/projectSlice";

export const StageThree = () => {
  const { type, newUser } = useAppSelector((store) => store.ProjectSlice);
  const [reasons, setReason] = useState(newUser?.reason);
  const [startDate, setStartDate] = useState(newUser?.startDate);
  const [endDate, setEndDate] = useState(newUser?.endDate);
  const dispatch = useAppDispatch();
  const user = {
    reason: reasons,
    dateStart: startDate,
    dateEnd: endDate,
  };
  const openStageTwo = () => {
    dispatch(changeStage(2));
    dispatch(addNewUserTwo(user));
  };
  const openStageFour = () => {
    dispatch(changeStage(4));
    dispatch(addNewUserTwo(user));
  };
  const changeReason = (event: string) => {
    setReason(event);
  };

  return (
    <div>
      <div className={style.select_container}>
        <h4 className={style.select_label}>Основание</h4>
        <input
          className={style.select_content}
          type="text"
          value={reasons || ""}
          onChange={(e) => changeReason(e.target.value)}
        />
      </div>
      {type === 2 && (
        <div>
          <div className={style.select_container}>
            <h4 className={style.select_label}>
              Срок<span className={style.select_star}>*</span>
            </h4>
            <div className={style.date_container}>
              <p className={style.select_label}>C</p>
              <input
                className={style.select_content}
                value={startDate || ""}
                onChange={(e) => setStartDate(e.target.value)}
                type="date"
              />
            </div>
            <div className={style.date_container}>
              <p className={style.select_label}>По</p>
              <input
                className={style.select_content}
                value={endDate || ""}
                onChange={(e) => setEndDate(e.target.value)}
                type="date"
              />
            </div>
          </div>
          <div className={style.stage_footer_container}>
            <button onClick={openStageTwo} className={style.stage_buttonBack}>
              Отмена
            </button>
            {reasons && startDate && endDate ? (
              <button
                onClick={openStageFour}
                className={style.stage_buttonOnward}
              >
                Далее
              </button>
            ) : (
              <button className={style.stage_buttonOnward_unactive}>
                Далее
              </button>
            )}
          </div>
        </div>
      )}
      {type !== 2 && (
        <div className={style.stage_footer_container}>
          <button onClick={openStageTwo} className={style.stage_buttonBack}>
            Назад
          </button>
          {reasons ? (
            <button
              onClick={openStageFour}
              className={style.stage_buttonOnward}
            >
              Далее
            </button>
          ) : (
            <button className={style.stage_buttonOnward_unactive}>Далее</button>
          )}
        </div>
      )}
    </div>
  );
};
