import Profile from 'components/user.js';
import user from './user.json';
import Statistics from 'components/statistics.js';
import stats from './data.json';
// import upload from '@testing-library/user-event/dist/upload';

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
    </div>
  );
};
