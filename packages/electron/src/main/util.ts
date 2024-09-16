import { URL } from 'url';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function resolveHtmlPath(htmlFileName: string) {
	if (process.env.NODE_ENV === 'development') {
		const port = process.env.PORT || 5173;
		const url = new URL(`http://localhost:${port}`);
		url.pathname = htmlFileName;
		return url.href;
	}
	return `file://${path.resolve(__dirname, '../renderer', htmlFileName)}`;
}
