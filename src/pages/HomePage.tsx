import { MainSection } from "../components/main/MainSection";
import { useAppDispatch } from "../utils/hooks/useRedux";
import { useEffect } from "react";
import { addPeople, addCompany, addRoles } from "../utils/store/projectSlice";

const Main = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const people = await fetch("/company.json").then((response) =>
        response.json()
      );
      const company = await fetch("/users.json").then((response) =>
        response.json()
      );
      const roles = await fetch("/roles.json").then((response) =>
        response.json()
      );
      dispatch(addPeople(people));
      dispatch(addCompany(company));
      dispatch(addRoles(roles));
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <MainSection />
      </div>
    </>
  );
};
export default Main;
