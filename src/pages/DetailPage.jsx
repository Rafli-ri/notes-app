import React from "react";
import NoteDetail from "../components/NoteDetail";
import {
  getNote,
  deleteNote,
  getAllNotes,
  archiveNote,
  unarchiveNote,
} from "../utils/local-data";
import { useNavigate, useParams } from "react-router-dom";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNote(props.id),
    };

    this.onDeletHandler = this.onDeletHandler.bind(this);
    this.archievHandler = this.archievHandler.bind(this);
  }

  archievHandler(id) {
    if (this.state.notes.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    this.props.navigate("/");
  }

  onDeletHandler(id) {
    deleteNote(id);
    // eslint-disable-next-line react/prop-types
    const { navigate } = this.props;
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
    navigate("/");
  }

  render() {
    return (
      <>
        <NoteDetail
          {...this.state.notes}
          onDelete={this.onDeletHandler}
          onArchiev={this.archievHandler}
        />
      </>
    );
  }
}

export default DetailPageWrapper;
