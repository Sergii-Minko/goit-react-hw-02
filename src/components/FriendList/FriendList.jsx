import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={css.friendsitem} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FriendList;
