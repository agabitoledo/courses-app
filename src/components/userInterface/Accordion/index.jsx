import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

export default function AccordionUi({title, description}) {
return (
	<div stlye={{}}>
	<Accordion style={{ width: 400}} >
		<AccordionSummary
		expandIcon={<ExpandMoreIcon />}
		aria-controls="panel1a-content"
		style={{ backgroundColor: "#dca8ce" }}
		>
		<Typography
			style={{
			fontWeight: 10,
			}}
		>
			{title}
		</Typography>
		</AccordionSummary>
		<AccordionDetails
		style={{ backgroundColor: '#dac6d5' }}
		
		>
		<Typography
		>
            {description}
        </Typography>
		</AccordionDetails>
	</Accordion>
	</div>
);
}
