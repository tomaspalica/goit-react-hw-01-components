import { Profile } from "./Profile";
import data from "../data"
import user from "../user"
import { Statistics } from "./Statistics";
import friends from "../friends"
import { FriendList } from "./FriendList";
import transactions from '../transactions'
import { TransactionHistory } from "./TransactionHistory";
export const App = () => (
    <div>
 <Profile 
 avatar = {user.avatar}
 name = {user.username}
 tag ={user.tag}
 location = {user.location}
 followers = {user.stats.followers}
views = {user.stats.views}
likes = {user.stats.likes}
 />
<Statistics
data={data}
/>
<FriendList friends={friends}/>
<TransactionHistory transactions={transactions}/>
    </div>
  );

