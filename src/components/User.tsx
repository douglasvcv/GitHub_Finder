
import { UserProps } from "../types/user";
import { Link } from "react-router-dom";

function User({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) {
  return (
    <div>
      <div>
        <img src={avatar_url} alt={login} />
        <h1>{login}</h1>
        {location && 
        <p>{location}</p>}
      </div>
      <div>
        <p>Seguidores:</p>
        <p>{followers}</p>
      </div>
      <div>
        <p>Seguindo:</p>
        <p>{following}</p>
      </div>
    <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  );
}

export default User;
