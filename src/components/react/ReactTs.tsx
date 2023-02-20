import { useState } from 'react';
import './styles.scss';

const React = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="msg text-lg">
			I am a React component with TypeScript! - {count}
			<button
				className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
				onClick={() => setCount(count + 1)}
			>
				Increase React counter
			</button>
		</div>
	);
};

export default React;
