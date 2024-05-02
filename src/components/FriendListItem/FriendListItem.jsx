import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <div className={css.friendsitem}>
        <img className={css.avatar} src={avatar} alt={name} />
        <p className={css.friendsname}>{name}</p>
        <p className={`${css.friendsstatus} ${css[isOnline]}`}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
