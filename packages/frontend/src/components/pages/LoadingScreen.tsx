import { Box, LinearProgress, Stack } from '@mui/material';
import Spikey from '../../../assets/spikey.svg?react';

export default function LoadingScreen() {
	return (
		<Stack
			className="main"
			direction="column"
			spacing={2}
			sx={{
				alignItems: 'center',
			}}
		>
			<Spikey style={{ width: '220px', height: 'auto' }} />
			<Box sx={{ width: '150%', minWidth: '200px' }}>
				<LinearProgress />
			</Box>
		</Stack>
	);
}
