import React from "react";
import { getAllNotes, getActiveNotes } from "../utils/local-data";
import NoteLists from "../components/NoteLists";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
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
      <>
        <section className="homepage">
          <h2>Catatan Aktif</h2>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
          <NoteLists notes={notes} />
        </section>
        <div className="homepage__action">
          <Link to="/notes/new">
            <button className="action" type="button" title="tambah">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default HomePage;
