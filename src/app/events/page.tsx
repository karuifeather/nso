import Header from '@/components/Header'
import Hero, {HeroProps} from '@/components/Hero'
import Footer from '@/components/Footer'

const heroProps : HeroProps = {
  title: 'This is NSO Events',
  subtitle: 'Find out what going on right around the corner'
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero title={heroProps.title} subtitle={heroProps.subtitle}/>
      <Footer/>
    </>
  )
}
