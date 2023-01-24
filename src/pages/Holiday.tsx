import HolidayPicture from "../../assets/Start_Screen.webp";
import NestedModal from "../components/NestedModal";
export function Holiday() {
  return (
    <div className="sub-container">
      <div className="holiday-container">
        <h2>
          Find the <span>perfect gift</span>!
        </h2>
        <p>
          Let our quick and easy Holiday Gift Finder take the stress out of
          searching..
        </p>
        <NestedModal />
        <img src={HolidayPicture} alt="holiday-lego" />
      </div>
      <div className="inProgress">
        <p>** Working in progress..🎁</p>
      </div>
    </div>
  );
}
