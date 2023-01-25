function Entry({ handleEntryClick }) {
  return (
    <div className="entry_screen">

      <div id="curved_text" className="warp" aria-labelledby="warp-label">
        <span id="warp-label" className="warp__placeholder">
          About Me
        </span>
        <span role="presentation">
          <span className="warp__0">A</span>
          <span className="warp__1">b</span>
          <span className="warp__2">o</span>
          <span className="warp__3">u</span>
          <span className="warp__4">t</span>
          <span className="warp__5"></span>
          <span className="warp__6">M</span>
          <span className="warp__7">e</span>
        </span>
      </div>

      <img
        id="entry_logo"
        onClick={handleEntryClick}
        src="https://portfolio-ian-ennis.s3.us-west-2.amazonaws.com/Tree.png"
        alt="entry_logo"
      />
    </div>
  );
}

export default Entry;
