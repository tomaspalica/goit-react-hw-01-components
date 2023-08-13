import css from '../css/Firendlist.module.css'

const FriendList = ({friends}) => (
    <ul className={css.friendList}>
    {friends.map((friend) => (
        <li key={friend.id} className={css.item}>
          {friend.isOnline === true ? (
            <span className={css.isOnline}></span>
          ) : (<span className = {css.isOffline}></span>)}
        
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{friend.name}</p>
      </li>
    ) )}
  </ul> 
)
export {FriendList}