import React, { useContext, useEffect, useState, useRef } from "react";
import {useHistory} from 'react-router-dom'
import noteContext from "../../context/notes/noteContext";
import Noteitem from "./Noteitem";
import "../../index.css"
const Notes = () => {
    const context = useContext(noteContext);
  let history = useHistory();
  const [note, setnote] = useState({ id: "", etitle: "", econtent: "" });

  const { notes, getnotes, editnote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getnotes();
    } else {
      history.push("/login");
    }
  }, []);
  const ref = useRef(null);
  const refclose = useRef(null);
  const updateNote = (currentnote) => {
    ref.current.click();
    setnote({
      id: currentnote._id,
      etitle: currentnote.title,
      econtent: currentnote.content,
    });
  };

  const handleclick = (e) => {
    editnote(note.id, note.etitle, note.econtent);
    refclose.current.click();
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
    <button
      ref={ref}
      type="button"
      className="btn btn-primary d-none"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button>

    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"  style={{color:"black"}} id="exampleModalLabel">
              Update Note
            </h5>
            {/* <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              className="btn btn-success"
            >
              <span aria-hidden="true">&times;</span>
            </button> */}
          </div>
          <div className="modal-body">
            {" "}
            <form>
              <div className="mb-1">
                <label htmlFor="title"  style={{color:"black"}} className="form-label">
                  title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  value={note.etitle}
                  onChange={onChange}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-1">
                <label htmlFor="content" style={{color:"black"}} className="form-label">
                  Content
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={note.econtent}
                  id="econtent"
                  name="econtent"
                  onChange={onChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              ref={refclose}
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              disabled={note.etitle.length < 5 || note.econtent.length < 5}
              onClick={handleclick}
              type="button"
              className="btn btn-success"
            >
              Update Note
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return (
          <Noteitem key={note._id} updateNote={updateNote} note={note} />
        );
      })}
    </div>
  </>
  )
}

export default Notes
