import Header from "@/components/Header";
import About, { AboutProps } from "@/components/About";
import Footer from "@/components/Footer";

const AboutProps: AboutProps = {
  organizationName: "Nepalese Student Organization",
  missionStatement: "This is NSO's mission statement",
  goals: ["Goal1", "Goal2", "Goal3"],
  howToGetInvolved: "Getting involved with NSO is easy. bla bla bla...",
  leadershipPositions: "Link to the leadership positions...",
  documents: [
    { name: "Constituition", link: "Link..." },
    { name: "Logo", link: "Link..." },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <About
        organizationName={AboutProps.organizationName}
        missionStatement={AboutProps.missionStatement}
        goals={AboutProps.goals}
        howToGetInvolved={AboutProps.howToGetInvolved}
        leadershipPositions={AboutProps.leadershipPositions}
        documents={AboutProps.documents}
      />
      <Footer />
    </>
  );
}
