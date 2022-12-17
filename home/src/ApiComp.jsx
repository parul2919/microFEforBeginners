import React from "react";
// so here we are puting contract in API properfy for which will set contract in APP.jsx file
const ApiComp = ({app}) => (
  <div className="container bg-dark text-white mt-5">
      <h2>{app.name} is coming form App property getting passed through APP.jsx in exposed app</h2>
    <div className="d-flex p-4 justify-content-around mb-5">Here we are going to cater issue where we are fetching data of exposed component from an API<br/>
    And root application dev team has changed the contract before notifying the consumer apps <br/>
    and hence used contract properties becomes undefined in Consumer app SO<br/>
    To recue the consumer app getting crashed , we will defined Safe component by using error boundaries concept in consumer app<br/>
    And then which wikl save our app to get crashed rather will give defined fallback error msg instead.</div>
  </div>
);

export default ApiComp;