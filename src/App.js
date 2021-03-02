import './App.css';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import profileUsers from './db/user.json';
import statisticsData from './db/statistical-data.json';
import friends from './db/friends.json';

console.log(statisticsData);

const { name, tag, location, avatar, stats } = profileUsers;

function App() {
  return (
    <div className="App">
      <h1>Learn React</h1>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friends} />,
      <TransactionHistory />
    </div>
  );
}

export default App;
