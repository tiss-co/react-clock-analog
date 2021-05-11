import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import css from './styles.module.scss';

export const AnalogClock = ({
  className,
  hour = 4,
  minute = 30,
  loading = false,
  darkMode = false,
  centerDot = true
}) => {
  const itemHeight = 2;

  let minuteStyle = {
    height: itemHeight,
    transform: 'rotate(' + ((minute / 60) * 360 - 90).toString() + 'deg)',
  };

  let hourStyle = {
    height: itemHeight,
    transform: 'rotate(' + ((hour / 12) * 360 - 90).toString() + 'deg)',
  };

  return (
    <div
      className={classNames(css.container, className, {
        [css.transition]: hour !== 0 && hour !== 12 && minute !== 0,
        [css.loading]: loading,
        [css.Dark]: darkMode
      })}
    >
      {centerDot && <div className={css.circle} />}
      <div className={css.minute} style={minuteStyle} />
      <div className={css.hour} style={hourStyle} />
    </div>
  );
};

AnalogClock.propTypes = {
  className: PropTypes.string,
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
  loading: PropTypes.bool,
  darkMode: PropTypes.bool,
  centerDot: PropTypes.bool,
};