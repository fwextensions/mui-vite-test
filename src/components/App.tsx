import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

function App()
{
	const [count, setCount] = useState(0);

	return (
		<Stack spacing={2}>
			<TextField
				label="Enter something:"
				fullWidth={true}
				variant="standard"
			/>
			<Button
				variant="outlined"
				onClick={() => setCount((count) => count + 1)}
			>
				Count is {count}
			</Button>
		</Stack>
	);
}

export default App;
