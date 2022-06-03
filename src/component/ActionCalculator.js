import React from 'react';

const ActionCalculator = ({onClick = () => {}, action = ''}) => {

	const onButtonClick = () => {
		onClick(action)
	}

	let bigClass;

	switch (action.toUpperCase()) {
		case 'AC': case '=':
			bigClass = 'span-two'
			break;
		default: bigClass = ''
	}

	return (
		<button className={bigClass} onClick={onButtonClick}>
			{action}
		</button>
	);
};

export default React.memo(ActionCalculator);