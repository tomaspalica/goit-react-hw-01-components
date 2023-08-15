import css from '../css/Profile.module.css'
import PropTypes from "prop-types";
const Profile = props => (
    <div className={css.profile}>
    <div className={css.description}>
      <img
        src={props.avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{props.name}</p>
      <p className="tag">{"@"}{props.tag}</p>
      <p className="location">{props.location}</p>
    </div>
  
    <ul className={css.stats}>
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{props.stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{props.stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{props.stats.likes}</span>
      </li>
    </ul>
  </div>
  )

  Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  };
  export {Profile}