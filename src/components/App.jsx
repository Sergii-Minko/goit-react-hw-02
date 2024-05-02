import "./App.css";
import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";
import userData from "../Data/userData.json";
import friends from "../Data/friends.json";
import transactions from "../Data/transactions.json";
import { TransactionHistory } from "./Transactions/Transactions";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
