import Footer from "../components/Footer";
import counterPageProps from "../interfaces/counterPageProps";
import TitleSection from "../components/TitleSection";
import { useLang } from '../langContext';

const Home = (props:counterPageProps) => {
	// @ts-ignore
	const [lang] = useLang();

	return(
		<div class={"pageContainer pageContainer" + props.page}>
			<TitleSection>
				<div class="row">
					<h2>
						{lang() === "de" && "Wilkommen zu:"}
						{lang() === "en" && "Welcome to:"}
					</h2>
				</div>
				<div class="row">
					<h1>
						Since you opened...
					</h1>
				</div>
				<div class="row">
					{lang() === "de" && 
						<p>
							Um fortzufahren
							<span class="desktop"> klicke auf die Pfeile </span> <span class="mobile"> wische seitlich </span>
							oder
							<span class="desktop"> scrolle runter </span> <span class="mobile"> wische runter </span>
						</p>
					}
					{lang() === "en" && 
						<p>
							To Continue
							<span class="desktop"> click the arrows </span> <span class="mobile"> swipe sideways </span>
							or
							<span class="desktop"> scroll down </span> <span class="mobile"> swipe down </span>
						</p>
					}
					
				</div>
			</TitleSection>
			<section class="container-fluid">
				<div class="container">
					<div class="row">
					{lang() === "de" && 
						<h3>
							Oft sind wir konfrontiert mit absurden hohen Zahlen, wenn wir uns Statistiken anschauen. So hohe Zahlen, dass wir sie nicht verstehen k&ouml;nnen. Wir verstehen nicht wie groß diese Zahlen wirklich sind, besonders wenn die Statistiken auf Jahre gerechnet sind.
						</h3>
						}
					{lang() === "en" && 
						<h3>
							Most of the time we are confronted with absurdly high numbers, when we are looking at statistics. High numbers we really can not under stand completly. We dont realise how big these numbers really are, expecially when these statistics are on yearly Basis.
						</h3>
						}	
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
				<div class="row">
						{lang() === "de" && 
							<h3>
								Bei dieser Website geht es darum Statisiken im Kontext zu sehen. Zu sehen welchen Einfluss die Menschheit auf die Welt hat, dabei sind die Statisitken runtergerechnet auf die Zeit, die auf der Website verbracht wurde.
							</h3>
							}
						{lang() === "en" && 
							<h3>
								This Website is all about seeing statistics in Context. Seeing the impact humanity has to this World and experience the these high numbers calculated down to the time you spent on this Website.
							</h3>
							}	
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
					<div class="row">
						{lang() === "de" && 
							<h3>
								Alle Statistiken haben verlinkte Quellen. Die meisten Statistiken sind grobe Schätzungen und werden von Jahr auf X pro Sekunde gerechnet. Dies hat nicht den Anspruch komplett exakt zu sein, sondern sollen die Zahlen greifbarer machen. 
							</h3>
							}
						{lang() === "en" && 
							<h3>
								All of these statistics have linked sources. Most of the Times these numbers are approximate values and calculated from a yearly base to x per second. They have not the requirement to be exactly correct instead they should give you a sense of what is Happening in the world.
							</h3>
							}	
					</div>
				</div>
			</section>
			<section class="container-fluid">
				<div class="container">
					<div class="row">
						{lang() === "de" && 
							<h3>
								Scrolle weiter runter um die Navigation zu sehen oder <span class="desktop">klicke die Pfeile</span> <span class="mobile">swipe seitlich</span> um weiter zu navigieren.
							</h3>
							}
							{lang() === "en" && 
							<h3>
								Scroll further down to see the navigation or navigate to the right by <span class="desktop">clicking the arrows</span> <span class="mobile">swiping sideways</span>.
							</h3>
							}	
					</div>
				</div>
			</section>
			<Footer />
		</ div>
	)
}

export default Home;
