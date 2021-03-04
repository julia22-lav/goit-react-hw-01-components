import React from 'react';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <>
      <h2>Task 3: FRIENDS</h2>
      <ul className={s.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            id={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </>
  );
};

export default FriendList;
