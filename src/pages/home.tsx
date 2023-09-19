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
							Most of the time when we look at statistics we are confronted with absurdly high numbers. High numbers we don't fully understand. We don't know how big these numbers really are, especially if these statistics are based on an annual basis.
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
								This website is all about showing statistics in context. To see the impact humanity has on this world and experience these high numbers, calculated based on the time you spent on this website.
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
								Alle diese Statistiken haben verlinkte Quellen. Dazu muss nur auf die Zahl geklickt werden. In den meisten Fällen handelt es sich bei diesen Zahlen um Näherungswerte, die von der Jahresbasis auf x pro Sekunde berechnet werden. Sie haben nicht den Anspruch, genau richtig zu sein, sondern sollen Ihnen einen Eindruck davon vermitteln, was in der Welt passiert.							</h3>
							}
						{lang() === "en" && 
							<h3>
								All of these statistics have linked sources. All you have to do is click on the number. In most cases, these numbers are approximations calculated from an annual basis to x per second. They don't claim to be exactly right, but are intended to give you a sense of what's happening in the world.							</h3>
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
