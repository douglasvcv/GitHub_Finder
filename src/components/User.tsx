import styles from "./User.module.css"

import { UserProps } from "../types/user";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";

function User({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) {
  return (
    <div className={styles.user_container}>
      <div>
        <img src={avatar_url} alt={login} />
        <h1>{login}</h1>
        {location && 
        <p>
        <MdLocationPin/>
          <span>{location}</span>
            </p>}
      </div>
      <div className={styles.number}>

      <div >
        <p>Seguidores:</p>
        <p>{followers}</p>
      </div>
      <span></span>
      <div >
        <p>Seguindo:</p>
        <p>{following}</p>
      </div>
      </div>
    <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  );
}

export default User;
