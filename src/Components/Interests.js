import React from "react";

function Interests() {

    const inspirations = [
        {insp: "Douglas Adams", link: "https://www.tatteredcover.com/book/9780345391803"},
        {insp: "Arthur C. Clarke", link: "https://www.clarkefoundation.org/arthur-c-clarke-biography/"},
        {insp: "Bungie", link: "https://www.bungie.net/"},
        {insp: "Ambrosia Software", link: "https://en.wikipedia.org/wiki/Ambrosia_Software"},
        {insp: "NASA", link: "https://www.nasa.gov/"},
        {insp: "SpaceX", link: "https://www.spacex.com/"},
        {insp: "The Planetary Society", link: "https://www.planetary.org/"},
        {insp: "Banff Mountain Film Festival", link: "https://www.banffcentre.ca/banffmountainfestival/tour"},
      ]

      const inspiration = inspirations.map((i, index) => (<span key={index} className="inspos"><a href={i.link}>{i.insp}</a></span>))

  return (
    <div id="inspirations">
      <h4>Inspirations</h4>
      {inspiration}
    </div>
  );
}

export default Interests;
