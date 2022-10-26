function Inspirations() {

  const inspirations = [
    {insp: "Denver School of the Arts", link: "https://dsa.dpsk12.org/"},
    {insp: "Bungie", link: "https://www.bungie.net/"},
    {insp: "Bethesda Game Studios", link: "https://bethesda.net/en/dashboard"},
    {insp: "Ambrosia Software", link: "https://en.wikipedia.org/wiki/Ambrosia_Software"},
    {insp: "Banff Mountain Film Festival", link: "https://www.banffcentre.ca/banffmountainfestival/tour"},
    {insp: "Douglas Adams", link: "https://www.tatteredcover.com/book/9780345391803"},
    {insp: "Arthur C. Clarke", link: "https://www.clarkefoundation.org/arthur-c-clarke-biography/"},
    {insp: "NASA", link: "https://www.nasa.gov/"},
    {insp: "The Planetary Society", link: "https://www.planetary.org/"},
    ]

  const inspiration = inspirations.map((i, index) => (<p key={index} className="inspos"><a href={i.link} target="_blank">{i.insp}</a></p>))

  return (
    <div id="inspirations">
      {inspiration}
    </div>
  );
}

export default Inspirations;
