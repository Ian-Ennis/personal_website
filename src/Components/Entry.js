function Entry({ handleEntryClick }) {
  return (
    <div className="entry_screen">

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
