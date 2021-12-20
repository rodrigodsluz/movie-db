import React from "react";
import "./profileInfo.scss";
import ShowMore from "react-show-more";

const ProfileInfo = ({ person, base_url, biography }) => {
  console.log(person);
  return (
    <div className="profile-info">
      <section className="profile-info__person">
        <div className="profile-info__person__img-box">
          <img
            className="profile-info__person__img"
            src={
              person.profile_path === null
                ? "https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person.jpg"
                : base_url + person.profile_path
            }
            alt={"person profile"}
          />
        </div>
        <div className="profile-info__person__profile-box">
          <p className="profile-info__person__fact">
            <span>Gênero: </span>
            {person.gender === 1 ? "Female" : "Male"}
          </p>
          <p className="profile-info__person__fact">
            <span>Data de nascimento: </span>
            {person.birthday}
          </p>
          <p className="profile-info__person__fact">
            <span>Local de nascimento: </span>
            {person.place_of_birth}
          </p>
        </div>
      </section>
      <section className="profile-info__biography">
        <h1 className="profile-info__name"> {person.name}</h1>

        <h2 className="profile-info__biography-title">Biografia</h2>

        <ShowMore
          lines={12}
          more="Show more"
          less="Show less"
          anchorClass="profile-info__anchor"
        >
          <div className="profile-info__biography-content">
            <p>{biography}</p>
          </div>
        </ShowMore>
      </section>
    </div>
  );
};

export default ProfileInfo;
