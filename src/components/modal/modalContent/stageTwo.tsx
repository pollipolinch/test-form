import { changeStage } from "../../../utils/store/projectSlice";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/useRedux";
import style from "./modalContent.module.css";
import { useState } from "react";
import classNames from "classnames";
import { addNewUser } from "../../../utils/store/projectSlice";

export const StageTwo = () => {
  const { people, company, newUser } = useAppSelector(
    (store) => store.ProjectSlice
  );
  const [showCompany, setShowCompany] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const [selectCompany, setSelectCompany] = useState(newUser?.company);
  const [selectPeople, setSelectPeople] = useState(newUser?.name);

  const dispatch = useAppDispatch();
  const userId = Math.floor(Math.random() * (1000 - 10) + 10);
  const user = {
    id: userId,
    name: selectPeople,
    company: selectCompany,
  };
  const openStageOne = () => {
    dispatch(changeStage(1));
    dispatch(addNewUser(user));
  };
  const openStageThree = () => {
    dispatch(changeStage(3));
    dispatch(addNewUser(user));
  };
  const chooseCompany = (name: string) => {
    setSelectCompany(name);
    setShowCompany(false);
  };
  const choosePerson = (name: string) => {
    setSelectPeople(name);
    setShowPeople(false);
  };
  return (
    <div>
      <div className={style.select_container}>
        <h4 className={style.select_label}>Компания</h4>
        <div className={style.select_content}>
          {selectCompany ? (
            <div className={style.select_name}>{selectCompany}</div>
          ) : (
            <div className={style.notselect_name}>Выберите</div>
          )}

          <div
            onClick={() => setShowCompany(!showCompany)}
            className={classNames(
              showCompany ? style.arrow_active : style.arrow
            )}
          ></div>
        </div>
        {showCompany && (
          <div className={style.openSelect_container}>
            {company.map((comp) => (
              <div
                onClick={() => chooseCompany(comp)}
                className={style.openSelect_item}
                key={comp}
              >
                {comp}
              </div>
            ))}
          </div>
        )}

        <h4 className={style.select_label}>Работник</h4>
        <div className={style.select_content}>
          {selectPeople ? (
            <div className={style.select_name}>{selectPeople}</div>
          ) : (
            <div className={style.notselect_name}>Выберите</div>
          )}
          <div
            onClick={() => setShowPeople(!showPeople)}
            className={classNames(
              showPeople ? style.arrow_active : style.arrow
            )}
          ></div>
        </div>
        {showPeople && (
          <div className={style.openSelect_container}>
            {people.map((person) => (
              <div
                onClick={() => choosePerson(person)}
                className={style.openSelect_item}
                key={person}
              >
                {person}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={style.stage_footer_container}>
        <button onClick={openStageOne} className={style.stage_buttonBack}>
          Назад
        </button>
        {selectCompany && selectPeople ? (
          <button onClick={openStageThree} className={style.stage_buttonOnward}>
            Далее
          </button>
        ) : (
          <button className={style.stage_buttonOnward_unactive}>Далее</button>
        )}
      </div>
    </div>
  );
};
