import React from 'react';
import {
	Stack,
	Typography,
	TextField,
	Button,
	FormControl,
	InputLabel,
	Select,
	Paper,
	MenuItem,
} from '@mui/material';
import { useWL } from '@erwb/hooks';
import '../../css/App.css';

export default function Demo() {
	const wl = useWL();
	const [evaluator, setEvaluator] = React.useState<
		'Python' | 'NodeJS' | 'Shell'
	>('Python');
	const [evaluatorInput, setEvaluatorInput] = React.useState<string>('');
	const [wlEvaluatorInput, setWLEvaluatorInput] = React.useState<string>('');
	const [result, setResult] = React.useState<string | null>(null);

	const handleEvaluatorChange = (e): void => {
		setEvaluator(e.target.value as 'Python' | 'NodeJS' | 'Shell');
	};
	const handleEvaluatorInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setEvaluatorInput(e.target.value as string);
	};
	const handleEvaluatorClick = async (): Promise<void> => {
		await wl
			.req(`/evaluate-${evaluator}`, {
				in: evaluatorInput,
			})
			.then((res) => setResult(res))
			.catch((err) => console.log(err));
	};

	const handleWLEvaluateClick = async (): Promise<void> => {
		await wl
			.req(`/evaluate`, {
				in: wlEvaluatorInput,
			})
			.then((res) => setResult(res))
			.catch((err) => console.log(err));
	};
	const handleWLInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setWLEvaluatorInput(e.target.value as string);
	};

	return (
		<Stack
			className="Hello"
			direction="column"
			spacing={2}
			sx={{ textAlign: 'center', alignContent: 'center' }}
			justifyContent="center"
		>
			<Typography variant="h2">
				Electron + ReactTS + WolframLanguage
			</Typography>
			<Stack spacing={2} direction="row">
				<TextField
					variant="filled"
					label="WL Input"
					color="primary"
					sx={{ width: 450 }}
					onChange={handleWLInputChange}
				/>
				<Button
					variant="contained"
					onClick={handleWLEvaluateClick}
					disabled={!wl.isActive}
				>
					Evaluate
				</Button>
			</Stack>
			<Stack spacing={2} direction="row">
				<FormControl>
					<InputLabel id="evaluator-label">Evaluator</InputLabel>
					<Select
						labelId="evaluator-label"
						label="Evaluator"
						sx={{ width: 130 }}
						value={evaluator}
						onChange={handleEvaluatorChange}
					>
						<MenuItem value="Python">Python</MenuItem>
						<MenuItem value="NodeJS">NodeJS</MenuItem>
						<MenuItem value="Shell">Shell</MenuItem>
					</Select>
				</FormControl>
				<TextField
					variant="filled"
					label="External Input"
					color="primary"
					sx={{ width: 300 }}
					onChange={handleEvaluatorInputChange}
				/>
				<Button
					variant="contained"
					onClick={handleEvaluatorClick}
					disabled={!wl.isActive}
				>
					Evaluate
				</Button>
			</Stack>
			{result && typeof result !== 'object' ? (
				<Paper sx={{ maxWidth: '50%', p: 2 }} variant="outlined">
					{result}
				</Paper>
			) : null}
		</Stack>
	);
}
