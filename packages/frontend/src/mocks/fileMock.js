import React from 'react';

const f = (props, ref) => <span ref={ref} {...props} />;
const SvgMock = React.forwardRef(f);

export const ReactComponent = SvgMock;
export default 'test-file-stub';
