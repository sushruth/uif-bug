import React from "react";
import "./App.css";
import { DetailsList } from "office-ui-fabric-react/lib/DetailsList";

const App: React.FC = () => {
  return (
    <div className="App">
      <DetailsList items={[]} />
    </div>
  );
};

export default App;
