import MembershipBillingComponent from "./MembershipBillingComponent";
import PlanDetailsComponent from "./PlanDetailsComponent";
import SettingsComponent from "./SettingsComponent";
import MyProfileComponent from "./MyProfileComponent";
import { Container } from "react-bootstrap";
import MyNav from "./MyNav";

const SettingsPage = () => {
  return (
    <>
      <MembershipBillingComponent />
      <PlanDetailsComponent />
      <SettingsComponent />
      <MyProfileComponent />
    </>
  );
};
export default SettingsPage;
