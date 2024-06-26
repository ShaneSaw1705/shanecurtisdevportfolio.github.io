import { NavBar } from "./assets/NavBar";
import { HeroHeader } from "./assets/HeaderHero";
import { AboutMe } from "./assets/AboutMe";
import { Skills } from "./assets/Skills";
import { ContactMe } from "./assets/ContactMe";

export const App = () => {
  return (
    <>
      <NavBar />
      <HeroHeader />
      <AboutMe />
      <Skills />
      <ContactMe />
    </>
  );
};
