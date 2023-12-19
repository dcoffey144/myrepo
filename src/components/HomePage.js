import Heading from "../components/Header";
import Specials from "../components/Speacials";
import HomeBody from "../components/Main";

/*import Testimonials from "../sections/headingPages/Testimonials";
import About from "../sections/headingPages/About";*/
export default function Homepage() {
  return (
    <>
          <Heading /> 
      <main>
   
             <HomeBody />
             <Specials />

      </main>
    </>
  );
}
