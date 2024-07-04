import PropTypes from 'prop-types';
import React from 'react';
import styles from './card.module.scss';

const Card = ({ suit, value, faceDown }) => {
  const cardClass = faceDown ? `${styles.card} ${styles['card-facedown']}` : `${styles.card} ${styles[`card-${suit}`]} ${styles[`card-${value}`]}`;
  return (
    <div className={cardClass}>
      {!faceDown && <span></span>}
    </div>
  );
};

Card.propTypes = {
  suit: PropTypes.oneOf(['hearts', 'diamonds', 'clubs', 'spades']),
  value: PropTypes.oneOf(['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k']),
  faceDown: PropTypes.bool,
};

export default Card;
