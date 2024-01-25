import React from 'react';
function DataDisplay({data}){
return(
    <>
          {data.map((e) =>(
          <div key = {e.id} style ={{textAlign: "left", border : "1px solid black", width : "420px", padding: "10px", margin : "10px", }}>
          <p><b>Id:</b> {e.id}</p>
          <p><b>Title :</b>  {e.title}</p>
          <p><b>Body : </b>{e.body}</p>
          </div>
      ))}
      </>
)
}
export default DataDisplay