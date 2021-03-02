import React from 'react';
import s from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.isOnline : s.isOffline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
