import { changeStage } from "../../../utils/store/projectSlice";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks/useRedux";
import style from "./modalContent.module.css";
import { useState } from "react";
import { Role } from "../../../utils/types/types";
import {
  addNewUserThree,
  showModal,
  resetData,
} from "../../../utils/store/projectSlice";

export const StageFour = () => {
  const { roles } = useAppSelector((store) => store.ProjectSlice);
  const [roleStatus, setRoleStatus] = useState<Role[]>(roles);
  const dispatch = useAppDispatch();
  const openStageThree = () => {
    dispatch(changeStage(3));
  };
  const handleToggle = (name: string) => {
    const changeItem = roleStatus.map((ell: Role) => {
      if (ell.name === name) {
        return {
          ...ell,
          status: !ell.status,
        };
      } else {
        return ell;
      }
    });
    setRoleStatus(changeItem);
  };
  const saveUser = () => {
    const user = {
      role: roleStatus,
    };
    dispatch(addNewUserThree(user));
    dispatch(resetData(true));
    dispatch(showModal(false));
  };
  return (
    <div>
      <h4 className={style.role_title}>Роль</h4>
      <div className={style.select_container}>
        {roleStatus.map((role) => (
          <div className={style.toggle_container} key={role.name}>
            <label className={style.checkbox}>
              <input
                checked={role.status}
                type="checkbox"
                onChange={() => handleToggle(role.name)}
              />
              <span className={style.checkbox_switch}></span>
            </label>
            <span>{role.name}</span>
          </div>
        ))}
      </div>
      <div className={style.stage_footer_container}>
        <button onClick={openStageThree} className={style.stage_buttonBack}>
          Назад
        </button>

        <button onClick={saveUser} className={style.stage_buttonOnward}>
          Сохранить
        </button>
      </div>
    </div>
  );
};
