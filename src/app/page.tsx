import Header from "@/components/Header";
import Hero, { HeroProps } from "@/components/Hero";
import Footer from "@/components/Footer";

const heroProps: HeroProps = {
  title: "This is NSO's home",
  subtitle: "Your stepping stone to success!",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero title={heroProps.title} subtitle={heroProps.subtitle} />
      <Footer />
    </>
  );
}
