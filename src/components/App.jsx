import Profile from './User/user.js';
import user from './Data/user.json';
import Statistics from './Statistic/statistics.js';
import stats from './Data/data.json';
import friends from './Data/friends.json';
import FriendList from './Friends/friends.js';
import transactions from './Data/transactions.json';
import TransactionHistory from './Transaction/transaction.js';

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
