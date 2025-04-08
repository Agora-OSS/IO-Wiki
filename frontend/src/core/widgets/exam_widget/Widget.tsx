import React, { type PropsWithChildren } from 'react';
import {Button} from '@/ui/button'

const Widget: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<Button  variant="outline">hello</Button>
			<p>this is a widget component by React.</p>
			<div>{children}</div>
		</div>
	);
};

export default Widget;
