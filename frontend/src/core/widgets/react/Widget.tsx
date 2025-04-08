import React, { type PropsWithChildren } from 'react';

const Widget: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<p>this is a widget component by React.</p>
			<div>{children}</div>
		</div>
	);
};

export default Widget;
