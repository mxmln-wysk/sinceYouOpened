import formatTime from "../helper/formatTime";

interface TimeBarInt{
	currentTime:number
}

const TimeBar = (props:TimeBarInt) => {
	return(
		<div class="timebar container-fluid">
			<div class="text-center h1">
				... {formatTime(props.currentTime)} has passed.

			</div>
		</div>
	)
}

export default TimeBar;