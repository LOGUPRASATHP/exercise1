import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayName from "./DisplayName"
function App() {
  const [name, setName] = useState("");
  const clearData = () => {
    setName("");
  }

  return (

    <>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputName4" class="form-label">Name</label>
          <input type="email" class="form-control" id="inputName4" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="col-12">
          <button type="button" class="btn btn-primary" onClick={clearData}>Clear</button>
        </div>
      </form>
      <DisplayName data={name} />
    </>

    // <>
    //   <from>
    //     <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
    //     <button type="button" onClick={clearData}>Clear</button>
    //   </from>
    //   <DisplayName data={name} />
    // </>
  )
}

export default App;