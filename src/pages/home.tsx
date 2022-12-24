import climate from '../data/climate'
import Footer from "../components/Footer";
import counterPageProps from "../interfaces/counterPageProps";
import TitleSection from "../components/TitleSection";

const Home = (props:counterPageProps) => {
	return(
		<div class="pageContainer pageContainer0">
			<TitleSection>
				<div class="row">
					<h2>
						Welcome to:
					</h2>
				</div>
				<div class="row">
					<h1>
						Since you opened...
					</h1>
				</div>
				<div class="row">
					<p>
						To Continue
						<span class="desktop"> click the arrows </span> <span class="mobile"> swipe sideways </span>
						or
						<span class="desktop"> scroll down </span> <span class="mobile"> swipe down </span>
					</p>
				</div>
			</TitleSection>
			<section class="container-fluid">
				<div class="container">
					<div class="row">
						<h3>
							Most of the time we are confronted with absurdly high numbers, when we are looking at statistics. High numbers we really can not under stand completly. We dont realise how big these numbers really are, expecially when these statistics are on yearly Basis.
						</h3>
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
					<div class="row">
						<h3>
							This Website is all about seeing statistics in Kontext. Seeing the impact humanity has to this World and experience the these high numbers calculated down to the time you spent on this Website.
						</h3>
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
					<div class="row">
						<h3>
							All of these statistics have linked sources. Most of the Times these numbers are approximate values and calculated from a yearly base to x per second. They have not the requirement to be exactly correct instead they should give you a sense of what is Happening in the world.
						</h3>
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
					<div class="row">
						<h3>
							Scroll further down to see the navigation or navigate to the right by <span class="desktop">clicking the arrows</span> <span class="mobile">swiping sideways</span>.
						</h3>
					</div>
				</div>
			</section>
			<Footer />
		</ div>
	)
}

export default Home;
