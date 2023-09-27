import React from "react";

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    console.log(event.target.value);
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    console.log(event.target.value);
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    console.log(this.state);
    // eslint-disable-next-line react/prop-types
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="add-new-page__input">
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            className="add-new-page__input__title"
            defaultValue={this.state.title}
            onChange={this.onTitleChangeHandler}
            placeholder="input judul ...."
          />
          <textarea
            placeholder="input deskripsi...."
            defaultValue={this.state.body}
            className="add-new-page__input__body"
            onChange={this.onBodyChangeHandler}
          ></textarea>

          <div className="add-new-page__action">
            {/* delete */}
            <button className="action" type="submit" title="Simpan">
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
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
              </svg>
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddNote;
