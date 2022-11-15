import Profile from 'components/user.js';
import user from './user.json';
import Statistics from 'components/statistics.js';
import stats from './data.json';
import friends from './friends.json';
import FriendList from 'components/friends.js';
import transactions from './transactions.json';
import TransactionHistory from 'components/transaction.js';

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
