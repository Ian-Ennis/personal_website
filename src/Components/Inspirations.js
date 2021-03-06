import React from "react";

function Inspirations() {

    const inspirations = [
      {insp: "Bungie", link: "https://www.bungie.net/"},
      {insp: "Ambrosia Software", link: "https://en.wikipedia.org/wiki/Ambrosia_Software"},
      {insp: "NASA", link: "https://www.nasa.gov/"},
      {insp: "SpaceX", link: "https://www.spacex.com/"},
      {insp: "The Planetary Society", link: "https://www.planetary.org/"},
      {insp: "Banff Mountain Film Festival", link: "https://www.banffcentre.ca/banffmountainfestival/tour"},
      {insp: "Arthur C. Clarke", link: "https://www.clarkefoundation.org/arthur-c-clarke-biography/"},
      {insp: "Douglas Adams", link: "https://www.tatteredcover.com/book/9780345391803"},
      ]

    const inspiration = inspirations.map((i, index) => (<p key={index} className="inspos"><a href={i.link}>{i.insp}</a></p>))

  return (
      <div id="inspirations">
        {inspiration}
      </div>
  );
}

export default Inspirations;
