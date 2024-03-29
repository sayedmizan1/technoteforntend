import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
// import "../../index.css"
import noteContext from "../../context/notes/noteContext";
const Addnotes = () => {
    let history = useHistory()
  const context = useContext(noteContext);
  const { addnote } = context;
  const [note, setnote] = useState({ title: "", content: "" });
  const handleclick = (e) => {
    e.preventDefault();
    addnote(note.title, note.content);
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handlelogout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    history.push("/")
    
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h3 style={{ textAlign: "left", marginRight:"700px" }}>iNotes</h3>
        <p style={{textAlign:"right"}}>Welcome {localStorage.getItem("user")}</p>
        <button style={{height:"70px",width:"70px",fontSize:"20px",margin:"10px"}} onClick={handlelogout}>Logout</button>
      </div>
      <h3>Add a Note</h3>

      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <input
            type="text"
            className="form-control"
            id="content"
            name="content"
            onChange={onChange}
          />
        </div>

        <button
          disabled={note.title.length < 5 || note.content.length < 5}
          type="submit"
          onClick={handleclick}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addnotes;
