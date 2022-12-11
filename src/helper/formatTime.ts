const formatTime = (time:number) => {
	const min = time/60;
	const hour = min/60;

	return `${ ('0' + Math.floor(hour)).slice(-2)}:${('0'+Math.floor(min%60)).slice(-2)}:${('0'+Math.floor(time%60)).slice(-2)}`
}

export default formatTime;
