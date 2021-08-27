import React from 'react';
import PropTypes from 'prop-types';
import { gameWidth } from '../constants';

const StartGame = (props) => {
    const button = {
        x: gameWidth / -2, //half width
        y: -200, //minus means up (above 0)
        width: gameWidth,
        height: 200,
        rx: 10, //radius x axis
        ry: 10, //radius y axis,
        style: {
            fill: 'transparent',
            cursor: 'pointer',
        },
        onClick: props.onClick,
    };

    const text = {
        textAnchor: 'middle', //cnter,
        x: 0, //center relative to X axis
        y: -150, //150 up
        style: {
            fontFamily: '"Joti One" cursive',
            fontSize: 60,
            fill: '#e3e3e3',
            cursor: 'pointer',
        },
        onClick: props.onClick,
    };

    return (
        <g filter="url(#shadow)">
            <rect {...button} />
            <text {...text}>
                Tap To Start!
            </text>
        </g>
    );
};

StartGame.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default StartGame;