import Profile from './PageUser/user.js';
import user from '../user.json';
import Statistics from './PageStatistic/statistics.js';
import stats from '../data.json';
import friends from '../friends.json';
import FriendList from './PageFriends/friends.js';
import transactions from '../transactions.json';
import TransactionHistory from './PageTransaction/transaction.js';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'upload stats'} stats={stats} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
