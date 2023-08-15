import css from '../css/Firendlist.module.css'
import PropTypes from "prop-types";
function FriendListItems({ isOnline, avatar, name }) {
    return (
      <li className={css.item}>
        {isOnline === true ? (
  <span className={css.isOnline}></span>
) : (<span className = {css.isOffline}></span>)}
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  }

  FriendListItems.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };
export {FriendListItems}