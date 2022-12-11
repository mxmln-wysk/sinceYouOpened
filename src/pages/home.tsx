import {useTime} from "../context";
import climate from '../data/climate'
import BasicCounter from "../components/BasicCounter";
import {For} from "solid-js";
const Home = () => {
	// @ts-ignore
	const [time] = useTime()
	const climateOne  = climate[0]
	const climateTwo  = climate[1]
	const climateThree  = climate[2]
	return(
		<div class="mainContainer">
			<section class="container-fluid">
				<div class="container">
					<div class="row row-cols-2">
						<BasicCounter object={climateOne} time={time()} type="full"/>
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
					<div class="row row-cols-2">
						<BasicCounter object={climateTwo} time={time()} type="single"/>
						<BasicCounter object={climateThree} time={time()} type="single"/>
						<BasicCounter object={climate[3]} time={time()} type="full"/>
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
					<div class="row row-cols-2">
						<BasicCounter object={climate[4]} time={time()} type="single" size={2}/>
						<BasicCounter object={climate[5]} time={time()} type="single" size={2}/>
						<BasicCounter object={climate[6]} time={time()} type="single" size={2}/>
						<BasicCounter object={climate[7]} time={time()} type="single" size={2}/>

					</div>
				</div>
			</section>
		</div>
	)
}

export default Home;
