import { Profile } from "./Profile";
import data from "../json/data"
import user from "../json/user"
import { Statistics } from "./Statistics";
import friends from "../json/friends"
import { FriendList } from "./FriendList";
import transactions from '../json/transactions'
import { TransactionHistory } from "./TransactionHistory";


export const App = () => (
    <div>
 <Profile 
 avatar = {user.avatar}
 name = {user.username}
 tag ={user.tag}
 location = {user.location}
 stats = {user.stats}
 />
<Statistics
data={data}
/>
<FriendList friends={friends}/>
<TransactionHistory transactions={transactions}/>
    </div>
  );

