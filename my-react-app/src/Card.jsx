import profilePic from "./assets/1.jpg";
function Card() {
  return (
    <div className="card">
      <img
        src={profilePic}
        className="card-img"
        alt="profile picture of Kris Lee"
      ></img>
      <h2 className="card-title">Kris Lee</h2>
      <p className="card-text">Master of IT - UOA</p>
    </div>
  );
}
export default Card;
