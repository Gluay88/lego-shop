import CountrieBG from "../../assets/countries.jpg";

export function Discover() {
  return (
    <div className="sub-container">
      <div>
        <h4>*** 🕵🏻‍♀️ Discover - Coming soon! ***</h4>
      </div>
      <div className="discover-container">
        <h2>25,000+ people in 40+ countries</h2>
        <img src={CountrieBG} alt="countrie-lego" />
      </div>
      <div className="history-lego">
        <div className="name-lego">
          <p>
            The name <span>‘LEGO’</span> is an abbreviation of the two Danish
            words <span>“leg godt”</span>, meaning <span>“play well”</span>.
            It’s our name and it’s our ideal.
          </p>
        </div>
        <div className="founded-lego">
          <p>
            The <span>LEGO</span> Group was founded in 1932 by{" "}
            <span>Ole Kirk Kristiansen</span>. The company has passed from
            father to son and is now owned by{" "}
            <span>Kjeld Kirk Kristiansen</span>, a grandchild of the founder.
          </p>
        </div>
      </div>
    </div>
  );
}
