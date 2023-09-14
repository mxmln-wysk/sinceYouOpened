import deathAndLife from "../data/death-and-life";
import BasicCounter from "../components/BasicCounter";
import counterPageProps from "../interfaces/counterPageProps";
import Footer from "../components/Footer";
import TitleSection from "../components/TitleSection";

const Environment = (props:counterPageProps) => {
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
						Death and Life
					</h1>
				</div>
			</TitleSection>
			<section class="container-fluid">
				<div class="container">
					<div class="row row-cols-2">
						<BasicCounter object={deathAndLife[0]} time={props.time} type="single"/>
						<BasicCounter object={deathAndLife[1]} time={props.time} type="single"/>
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
					<div class="row row-cols-2">
						<BasicCounter object={deathAndLife[3]} time={props.time} type="full"/>
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
					<div class="row row-cols-2">
						<BasicCounter object={deathAndLife[4]} time={props.time} type="single"/>
						<BasicCounter object={deathAndLife[5]} time={props.time} type="single"/>
					</div>
				</div>
			</section>
			<Footer/>
		</div>
	)
}

export default Environment;
