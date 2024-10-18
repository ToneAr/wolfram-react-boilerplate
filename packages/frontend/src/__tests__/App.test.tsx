import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Frontend } from '../App';
import mockApi from '../mocks/apiMock';
import { Handler } from '../../src/api';

describe('App', () => {
	it('should render', () => {
		expect(render(<Frontend api={mockApi as Handler} />)).toBeTruthy();
	});
});
