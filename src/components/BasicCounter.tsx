import reformatNumber from "../helper/reformatNumber";

interface BasicCounterProps {
	object:{
		multiplier: number;
		link: string;
		text: string;
		unit: string;
		fractionDigits?: number
	},
	type: string
	time: number;
	size?:number;

}

const BasicCounter = (props: BasicCounterProps) => {
	let sizeBig;
	let sizeSmall;
	switch (props.size){
		case 2:
			sizeBig = "h2"
			sizeSmall = "h3"
			break;
		case 1:
			sizeBig = "h1"
			sizeSmall = "h3"
			break;
		default:
			sizeBig = "h1"
			sizeSmall = "h2"
			break;
	}
	return (
		<div class={" col counterItem "+ props.type}>
			<a href={props.object.link}  target={"_blank"} >
			<span class={sizeBig}>
				... {reformatNumber((props.time * props.object.multiplier), props.object.unit, props.object.fractionDigits)}
			</span>
				<span class={sizeSmall}>
				{props.object.text}
			</span>
			</a>
		</div>
	)
}

export default BasicCounter;