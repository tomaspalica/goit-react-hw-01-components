import css from '../Profile.module.css'

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
        <span className="quantity">{props.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{props.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{props.likes}</span>
      </li>
    </ul>
  </div>
  )
  export {Profile}