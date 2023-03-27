import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import "./App.css";

function App()
{
	const [count, setCount] = useState(0);

	return (
		<Stack
			spacing={2}
			sx={{ width: "50%" }}
		>
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
