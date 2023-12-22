import React from "react";

export interface AboutProps {
  organizationName: string;
  missionStatement: string;
  goals: string[];
  howToGetInvolved: string;
  leadershipPositions: string;
  documents: { name: string; link: string }[];
}

const About: React.FC<AboutProps> = ({
  organizationName,
  missionStatement,
  goals,
  howToGetInvolved,
  leadershipPositions,
  documents,
}) => {
  return (
    <>
      <div>
        <div>
          <section>
            <h1>About {organizationName}</h1>
            <p>{`Welcome to the ${organizationName} at Jacksonville State University. ${missionStatement}`}</p>
          </section>

          <section>
            <h2>Goals</h2>
            <ul>
              {goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>How to Get Involved</h2>
            <p>{howToGetInvolved}</p>
          </section>

          <section>
            <h2>Leadership Positions</h2>
            <p>{leadershipPositions}</p>
          </section>

          <section>
            <h2>Documents</h2>
            <ul>
              {documents.map((doc, index) => (
                <li key={index}>
                  <a href={doc.link} target="_blank" rel="noopener noreferrer">
                    {doc.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
