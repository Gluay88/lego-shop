import HolidayPicture from "../../assets/Start_Screen.webp";
export function Holiday() {
  return (
    <div className="sub-container">
      <div>
        <h4>*** 🎁 Holiday - Coming soon!</h4>
      </div>
      <div className="holiday-container">
        <h2>Find the perfect gift!</h2>
        <p>
          Let our quick and easy Holiday Gift Finder take teh stress out of
          searching..
        </p>
        <button>Start</button>
        <img src={HolidayPicture} alt="holiday-lego" />
      </div>
    </div>
  );
}
