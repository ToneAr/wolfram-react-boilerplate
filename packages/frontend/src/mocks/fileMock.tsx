import React from 'react';
import { JSX } from 'react/jsx-runtime';

const f = (
	props: JSX.IntrinsicAttributes &
		React.ClassAttributes<HTMLSpanElement> &
		React.HTMLAttributes<HTMLSpanElement>,
	ref: React.LegacyRef<HTMLSpanElement> | undefined,
): React.JSX.Element => <span ref={ref} {...props} />;
const SvgMock = React.forwardRef(f);

export const ReactComponent = SvgMock;
export default 'test-file-stub';
