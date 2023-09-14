import climate from '../data/climate'
import BasicCounter from "../components/BasicCounter";
import counterPageProps from "../interfaces/counterPageProps";
import Footer from "../components/Footer";
import TitleSection from "../components/TitleSection";

const Environment = (props:counterPageProps) => {
	// @ts-ignore
	const climateOne  = climate[0]
	const climateTwo  = climate[1]
	const climateThree  = climate[2]
	return(
		<div class={"pageContainer pageContainer" + props.page}>
			<TitleSection>
				<div class="row">
					<h2>
						It's all about
					</h2>
				</div>
				<div class="row">
					<h1>
						Environment
					</h1>
				</div>

			</TitleSection>
			<section class="container-fluid">
				<div class="container">
					<div class="row row-cols-2">
						<BasicCounter object={climateOne} time={props.time} type="full"/>
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
					<div class="row row-cols-2">
						<BasicCounter object={climate[9]} time={props.time} type="single" size={2}/>
						<BasicCounter object={climate[10]} time={props.time} type="single" size={2}/>
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
			<section class="container-fluid">
				<div class="container">
					<div class="row row-cols-2">
						<BasicCounter object={climate[8]} time={props.time} type="full"/>
					</div>
				</div>
			</section>
			<Footer/>
		</div>
	)
}

export default Environment;
