import Footer from "../components/Footer";
import counterPageProps from "../interfaces/counterPageProps";

const About = (props:counterPageProps) => {
    return(
      <div class={"pageContainer pageContainer" + props.page}>
        <section class="container-fluid">
          <div class="container">
            <div class="row">
              <h1>About</h1>
              <h1>To Be done</h1>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
}

export default About;