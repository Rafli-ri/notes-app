import React from "react";
import NoteItems from "./NoteItems";
import PropTypes from "prop-types";

const NoteLists = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="notes-list__empty-message">Tidak Ada Catatan</p>
      ) : (
        notes.map((note) => <NoteItems key={note.id} id={note.id} {...note} />)
      )}
    </div>
  );
};

NoteLists.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteLists;
