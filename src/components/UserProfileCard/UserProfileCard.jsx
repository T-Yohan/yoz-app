import React from "react";
import "./UserProfileCard.css";
import profile_icon from "../Assets/YozCartoon.png";
const UserProfileCard = () => {
  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile-title"> Yohan Turlet </div>
        <div className="profile-description">
            Je suis un concepteur développeur en devenir , je me ferais un plaisir de concevoir vos applications grâce aux connaissances que j'ai acquise durant mon apprentissage.
            Pour plus de renseignement n'hésitez pas à me joindre en cliquant sur le bouton si dessous!
            à bientôt!
        </div>
        <div className="profile-button">
          <a href="mailto:yohanturlet@outlook.fr">Contactez Moi!</a>{" "}
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
