import UsersStructure from "../../store/users/types";

interface UserCardProps {
  user: UsersStructure;
}

const UserCard = ({
  user: { description, name, picture },
}: UserCardProps): JSX.Element => {
  return (
    <article className="user-card">
      <img rel="preload" src={picture} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
};

export default UserCard;
