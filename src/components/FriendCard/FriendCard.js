//sets up the reusable FriendCard component
import React from "react";
import "./FriendCard.css";
const FriendCard = props => (
  <div className="img-box" onClick={props.imageClick}>
    <div className="img-container">
      <img class="height:100px; width:100px" alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);
export default FriendCard;