import React, { useEffect, useState } from "react";
import "./FollowersList.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FollowersList() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      const { data } = await axios.get("https://randomuser.me/api/?results=5");
      setFollowers(data.results);
    };

    fetchFollowers();
  }, []);

  return (
    <div className="followerslist-container">
      <div>
        {followers.map((follower, index) => (
          <div
            key={index}
            className="follower__item"
            data-testid={`follower-item-${index}`}
          >
            <img alt="img" src={follower.picture.large} />
            <div className="follower__Details">
              <div className="name__box">
                <h4>
                  {follower.name.first} {follower.name.last}
                </h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">
          <p>Go Back</p>
        </Link>
      </div>
    </div>
  );
}
