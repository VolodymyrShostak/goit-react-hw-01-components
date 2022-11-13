import Profile from 'components/user.js';
import user from './user.json';
import Statistics from 'components/statistics.js';
import data from './data.json';

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
      <Statistics
        title={data.title}
        stats={data.stats}
        // docxPercentage={data.stats.docxPercentage}
        // mp3Percentage={data.stats.mp3Percentage}
        // pdfPercentage={data.stats.pdfPercentage}
        // mp4Percentage={data.stats.mp4Percentage}
      />
    </div>
  );
};
