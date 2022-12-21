import climate from '../data/climate'
import BasicCounter from "../components/BasicCounter";
import Footer from "../components/Footer";
import counterPageProps from "../interfaces/counterPageProps";

const Home = (props:counterPageProps) => {
	const climateOne  = climate[0]
	const climateTwo  = climate[1]
	const climateThree  = climate[2]
	return(
		<div class="pageContainer pageContainer0">
			<section class="container-fluid">
				<div class="container">
					<div class="row row-cols-2">
						Welcome
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
					<div class="row row-cols-2">
						<BasicCounter object={climateTwo} time={props.time} type="single"/>
						<BasicCounter object={climateThree} time={props.time} type="single"/>
						<BasicCounter object={climate[3]} time={props.time} type="full"/>
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
					<div class="row row-cols-2">
						<BasicCounter object={climate[4]} time={props.time} type="single" size={2}/>
						<BasicCounter object={climate[5]} time={props.time} type="single" size={2}/>
						<BasicCounter object={climate[6]} time={props.time} type="single" size={2}/>
						<BasicCounter object={climate[7]} time={props.time} type="single" size={2}/>

					</div>
				</div>
			</section>
			<Footer />
		</ div>
	)
}

export default Home;
