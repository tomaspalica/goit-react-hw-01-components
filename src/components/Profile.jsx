const Profile = props => (
    <div className="profile">
    <div className="description">
      <img
        src={props.avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{props.name}</p>
      <p className="tag">{props.tag}</p>
      <p className="location">{props.location}</p>
    </div>
  
    <ul className="stats">
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