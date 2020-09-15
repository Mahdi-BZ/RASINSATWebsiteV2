import React, { useState } from "react";

const Community = () => {
  const views = [
    {
      description:
        "Member of the week is a weekly rubric on our Facebook page. Each saturday, a member is selected based on their motivation level, their presence and their participation in our activities.",
      imgs: [
        "memberOfTheWeek/member1.webp",
        "memberOfTheWeek/member2.webp",
        "memberOfTheWeek/member3.webp",
        "memberOfTheWeek/member4.webp",
        "memberOfTheWeek/member5.webp",
        "memberOfTheWeek/member6.webp",
      ],
    },
    {
      description:
        "One of the best things about RAS chapter is the connection we have with our members. Here are some pictures that translate the amazing atmosphere we have as a chapter.",
      imgs: [
        "familyGallery/family1.webp",
        "familyGallery/family2.webp",
        "familyGallery/family3.webp",
        "familyGallery/family4.webp",
        "familyGallery/family5.webp",
        "familyGallery/family6.webp",
      ],
    },
    {
      description:
        "Gaining members trust and love is our key to sucess, that’s the reason why we held a team building. In ras chapter most of our work requires being in teams.",
      imgs: [
        "teambuilding/teambuilding1.webp",
        "teambuilding/teambuilding2.webp",
        "teambuilding/teambuilding3.webp",
        "teambuilding/teambuilding4.webp",
        "teambuilding/teambuilding5.webp",
        "teambuilding/teambuilding6.webp",
      ],
    },
  ];

  var renderedView = views.map((v, index) => {
    return (
      <div className="active" key={index}>
        <p>{v.description}</p>
        <div className="ui three column grid">
          {v.imgs.map((img, index) => {
            return (
              <div className="column" key={index}>
                <div className="ui segment">
                  <img
                    src={`${process.env.PUBLIC_URL}/imgs/community/${img}`}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  const [view, setView] = useState(renderedView[0]);

  return (
    <div className="community">
      <div className="ui container center aligned">
        <h2 className="section-header">Our Community</h2>
        <div
          className="community-button community-button-active "
          onClick={() => {
            setView(renderedView[0]);
          }}
        >
          Members of the Week
        </div>
        <div
          className="community-button "
          onClick={() => {
            setView(renderedView[1]);
          }}
        >
          RAS Familly Gallery
        </div>
        <div
          className="community-button "
          onClick={() => {
            setView(renderedView[2]);
          }}
        >
          Team Building
        </div>
        {view}
      </div>
    </div>
  );
};

export default Community;
