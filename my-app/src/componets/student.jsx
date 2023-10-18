import React, { useEffect, useState } from "react";

export const Student = () => {
  const [name, setName] = useState(null);
  const [studentclass, setstudentclass] = useState(null);
  const [marks, setMarks] = useState(null);
  useEffect(() => {
    // let data=await fetch(http://localhost:8080/)
  }, []);

  return (
    <div>
      <h1>Student Information Form</h1>
      <form onSubmit={"s"}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div>
          <label>Class:</label>
          <input type="text" name="studentClass" onChange={(e)=>{setstudentclass(e.target.value)}} />
        </div>
        <div>
          <label>Marks:</label>
          <input type="text" name="marks" onChange={(e)=>{setMarks(e.target.value)}} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
