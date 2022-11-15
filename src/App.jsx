import Profile from 'components/user.js';
import user from './user.json';
import Statistics from 'components/statistics.js';
import stats from './data.json';
import friends from './friends.json';
import FriendList from 'components/friends.js';

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
    </div>
  );
};
