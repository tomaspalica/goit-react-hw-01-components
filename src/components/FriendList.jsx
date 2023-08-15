import css from '../css/Firendlist.module.css'
import { FriendListItems } from './FriendListItems'
import PropTypes from "prop-types";
const FriendList = ({friends}) => (
    <ul className={css.friendList}>
     {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItems
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
  </ul> 
)
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
export {FriendList}