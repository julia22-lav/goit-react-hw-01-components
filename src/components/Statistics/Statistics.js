import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  console.log(title, stats);
  return (
    <>
      <h2>Task 2: STATISTICS</h2>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>Upload stats</h2>}

        <ul className={s.statList}>
          {stats.map(el => {
            const { id, label, percentage } = el;
            return (
              <li className={s.item} key={id}>
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Statistics;
Statistics.defaultProps = {
  title: 'string',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
