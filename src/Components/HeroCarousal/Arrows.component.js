import React from 'react';
import { GrNext,GrPrevious } from 'react-icons/gr';

export const NextArrow = (props) => {
	// const{className, style, onClick} = props;
	return (
		<>
		<GrNext
			className={props.className}
			style={{ ...props.style, backgroundColor:"white"}}
			onClick={props.onClick}
		/>
		</>
	)
};

export const PrevArrow = (props) => {
	return (
		<>
			<GrPrevious
				className={props.className}
				style={{ ...props.style, backgroundColor:"white"}}
				onClick={props.onClick}
			/>
		</>
	)
};