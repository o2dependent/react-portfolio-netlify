import React from 'react';
import { motion } from 'framer-motion';
import chroma from 'chroma-js';

const LoadingScreen = (props) => {
	const { changeIsDoneLoading } = props;
	const colors = ['#b72268', '#833bb4', '#ff0000'];
	const bg = chroma
		.scale([colors[Math.floor(Math.random() * colors.length)], '#1F1521'])
		.colors(10);

	setTimeout(() => changeIsDoneLoading(true), 1500);

	return (
		<>
			{bg.map((x, i) => (
				<motion.div
					key={i}
					style={{
						zIndex: 1000,
						background: x,
						position: 'fixed',
						top: 0,
						left: 0,
						height: '100%',
						width: '100%',
						opacity: (i / bg.length) * 3,
					}}
					initial={{
						y: '-100%',
					}}
					animate={{
						y: 0,
					}}
					exit={{
						y: '100%',
						transition: {
							delay: (bg.length - 1) * 0.05 - i * 0.06,
							duration: 0.75,
						},
					}}
					transition={{ duration: 0.8, delay: 0.05 * i }}
				></motion.div>
			))}
		</>
	);
};

export default LoadingScreen;
