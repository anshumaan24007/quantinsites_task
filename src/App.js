import BackgroudImage from "./assets/austin-distel-mpN7xjKQ_Ns-unsplash.jpg";
import Logo from "./assets/logo.png";
import SidePic from "./assets/pat-whelen-xSsWBa4rb6E-unsplash.jpg";
import User from "./assets/alex-mccarthy-RGKdWJOUFH0-unsplash.jpg";
import React from "react";
import "./App.css";
import RankComponent from "./RankComponent";

function App() {
  const [readMore, setReadMore] = React.useState(false);

  function toggleReadMore() {
    setReadMore(!readMore);
  }

  function faqTogglerFunc(e) {
    let panel = e.target.nextSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }

  const data = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.smh.com.au",
      logo: "https://logo.clearbit.com/vkontakte.ru",
      name: "Postmates",
      country: "Anchorage, Alaska, United States",
    },
    {
      id: 4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.boston.com",
      logo: "https://logo.clearbit.com/photobucket.com",
      name: "Nationwide",
      country: "Murray, Utah, United States",
    },
    {
      id: 7,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.ifeng.com",
      logo: "https://logo.clearbit.com/ft.com",
      name: "Superhuman",
      country: "Elyria, Ohio, United States",
    },
    {
      id: 8,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.sciencedirect.com",
      logo: "https://logo.clearbit.com/un.org",
      name: "Facebook",
      country: "Cambridge, Massachusetts, United States",
    },
    {
      id: 9,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.scientificamerican.com",
      logo: "https://logo.clearbit.com/japanpost.jp",
      name: "General Motors",
      country: "Rancho Cucamonga, California, United States",
    },
    {
      id: 11,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.pen.io",
      logo: "https://logo.clearbit.com/stanford.edu",
      name: "State Farm Insurance",
      country: "Rancho Cucamonga, California, United States",
    },
    {
      id: 13,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.quantcast.com",
      logo: "https://logo.clearbit.com/samsung.com",
      name: "Uber",
      country: "Napa, California, United States",
    },
    {
      id: 14,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.topsy.com",
      logo: "https://logo.clearbit.com/phpbb.com",
      name: "Goldman Sachs Group",
      country: "Pocatello, Idaho, United States",
    },
    {
      id: 15,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.shareasale.com",
      logo: "https://logo.clearbit.com/gravatar.com",
      name: "United Airlines",
      country: "Long Beach, California, United States",
    },
    {
      id: 16,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "https://www.barnesandnoble.com",
      logo: "https://logo.clearbit.com/independent.co.uk",
      name: "General Motors",
      country: "Bedford, Texas, United States",
    },
  ];

  function scrollDown() {
    const element = document.getElementById("section2");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="bannerContainer">
          <div className="siteTitle">
            <img src={Logo} alt="" className="logoImage" />
            <ul>
              <li>
                <a href="/about">{"About"}</a>
              </li>
              <li>
                <a href="/contactus">{"Contact Us"}</a>
              </li>
              <li>
                <a href="/termsofuse">{"Terms of Use"}</a>
              </li>
              <li>
                <a href="/privacypolicy">{"Privacy Policy"}</a>
              </li>
            </ul>
          </div>
          <div className="bannerImage">
            <img src={BackgroudImage} alt="" className="backgroudImage"></img>
            <div className="bannerText">
              {"Independent, objective, and trustworthy market research."}
            </div>
            <button className="btn41-43 btn-41" onClick={scrollDown}>
              {"View Rankings"}
            </button>
          </div>
        </div>
        <div className="rankList" id="section2">
          <RankComponent data={data} />
        </div>
        <div className="articleContainer">
          <img src={SidePic} alt="" className="leftStaticImg" />
          <div className="rightArticleZone">
            <div
              className="articleBody"
              id={`container${readMore ? "active" : ""}`}
            >
              <h1 className="articleHeader">
                {
                  "What to look for when hiring the services of the specific industry."
                }
              </h1>
              <p className="articleText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
              <span id="span" onClick={toggleReadMore}></span>
            </div>
            <div className="articleOwner">
              <img src={User} alt="" className="userPic" />
              <div className="userDetail">
                <span className="userName">{"Olivia Rhye"}</span>
                <span className="subDetails">{"Published in Adventure"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="faqContainer">
          <div className="leftFaq">
            <h1 className="faqHeader">FAQs</h1>
            <p className="faqText">
              Everything you need to know about the product. Can't find the
              answer to you're looking for? Please chat with our friendly team.
            </p>
          </div>
          <div className="rightFaq">
            <button class="accordion" onClick={(e) => faqTogglerFunc(e)}>
              Is there a free trial available?
            </button>
            <div class="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button class="accordion" onClick={(e) => faqTogglerFunc(e)}>
              Can I change my plan later?
            </button>
            <div class="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button class="accordion" onClick={(e) => faqTogglerFunc(e)}>
              What is your cancellation policy?
            </button>
            <div class="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button class="accordion" onClick={(e) => faqTogglerFunc(e)}>
              Can other info be added to an invoice?
            </button>
            <div class="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button class="accordion" onClick={(e) => faqTogglerFunc(e)}>
              How does billing work?
            </button>
            <div class="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button class="accordion" onClick={(e) => faqTogglerFunc(e)}>
              How do I change my account email?
            </button>
            <div class="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
