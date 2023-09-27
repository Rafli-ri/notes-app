import React from "react";
import { addNote, getAllNotes } from "../utils/local-data";
import AddNote from "../components/AddNote";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  const navigate = useNavigate();

  function onSaveNoteHandler(notes) {
    addNote(notes);
    navigate("/");
  }

  return (
    <>
      <AddNote addNote={onSaveNoteHandler} />
    </>
  );
};

// AddPage.propTypes = {
//   title: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
// };
// AddPage.propTypes = {
//   title: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
// };

// class AddPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: getAllNotes(),
//       search: "",
//     };
//     this.onSubmitHandler = this.onSubmitHandler.bind(this);
//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     this.isArchived = this.isArchived.bind(this);
//     this.searchItem = this.searchItem.bind(this);
//   }

//   searchItem(event) {
//     this.setState((prevItem) => {
//       return {
//         ...prevItem,
//         search: event.target.value.toLowerCase(),
//         // notes: notes.filter((item) =>
//         //   console.log(item.body.toLowerCase().includes(this.search))
//         // ),
//       };
//     });
//   }

//   isArchived(id) {
//     this.setState((prevItem) => {
//       return {
//         ...prevItem,
//         notes: prevItem.notes.map((note) => {
//           if (note.id === id) {
//             return {
//               ...note,
//               archived: !note.archived,
//             };
//           }
//           return note;
//         }),
//       };
//     });
//   }

//   onDeleteHandler(id) {
//     const notes = this.state.notes.filter((notes) => notes.id !== id);
//     this.setState({ notes });
//   }

//   onSubmitHandler({ title, description }) {
//     this.setState((prevItem) => {
//       return {
//         notes: [
//           ...prevItem.notes,

//           {
//             id: `notes-${+new Date()}`,
//             title: title || "(untitled)",
//             description,
//             createdAt: new Date().toISOString(),
//             archived: false,
//           },
//         ],
//       };
//     });
//     console.log(this.state.notes);
//   }
//   render() {
//     // let state = this.state.notes;

//     // if (this.state.search) {
//     //   state = state.filter((note) =>
//     //     note.title.toLowerCase().includes(this.state.search.toLowerCase())
//     //   );
//     // }

//     // const archiveData = state.filter((note) => note.archived != false);
//     // const activeData = state.filter((note) => note.archived == false);
//     return (
//       <>
//         {/* <NoteSearch query={this.state.search} onChange={this.searchItem} /> */}
//         <div className="note-app__body">
//           {/* <FormInput SubmitNotes={this.onSubmitHandler} /> */}
//           <AddNote addNote={this.onSubmitHandler} />
//         </div>
//       </>
//     );
//   }
// }

export default AddPage;
