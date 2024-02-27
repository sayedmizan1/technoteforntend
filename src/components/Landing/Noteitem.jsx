import React, { useContext } from "react";
import noteContext from "../../context/notes/noteContext";

const Noteitem = (props) => {
    const context = useContext(noteContext);
  const { deletenote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col">
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title" style={{color:"black"}}>{note.title}</h5>
        <p className="card-text" style={{color:"black"}}>{note.content}</p>
        <button type="submit" className="btn btn-success " style={{margin:"20px"}}  onClick={()=>{updateNote(note)}} value="Edit">Edit</button>
        <button type="submit" className="btn btn-danger" value="Delete" onClick={()=>{deletenote(note._id)}}>Delete</button>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  </div>
  )
}

export default Noteitem
