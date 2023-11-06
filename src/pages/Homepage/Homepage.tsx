import {
  Author,
  ButtonHomepage,
  Description,
  GrettingsWrappe,
  HomepageSection,
  ImageHomepage,
  Title,
} from "./Homepage.styled";
import banner from "../../imgFolder/banner.jpg";


const Homepage = () => {

  return (
    <HomepageSection>
          <ImageHomepage src={banner} alt="banner" />
          <GrettingsWrappe>
            <Title>Free ADS board</Title>
            <Description>
              This is not commercial project, but simply a demonstration of the
              knowledge and capabilities of GoIT student the &nbsp;
               <Author href="https://www.linkedin.com/in/andrii-zaiats/" target="_blank">
                Andrii Zaiats
              </Author>
            </Description>
            <Description>
              Although our server does not store the password in the database in
              clear text, we still do not recommend entering the real password
              for your email, you can also use a demo profile
            </Description>
            <ButtonHomepage to="/ads">
              Watch ads
            </ButtonHomepage>
          </GrettingsWrappe>
    </HomepageSection>
  );
};

export default Homepage;
