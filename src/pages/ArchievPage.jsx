import React from "react";
import SearchBar from "../components/SearchBar";
import {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
} from "../utils/local-data";

import NoteLists from "../components/NoteLists";

class ArchievPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    // console.log(keyword);
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NoteLists notes={notes} />
      </section>
    );
  }
}

export default ArchievPage;
