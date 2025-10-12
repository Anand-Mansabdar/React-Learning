import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Atharva Mansabdar"
        src="https://images.unsplash.com/photo-1753710877908-c6111ffcad4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=1000" age={20}
      />
      <Card
        user="Anand Mansabdar"
        src="https://images.unsplash.com/photo-1755502046743-78265e184cc3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=1000" age={20}
      />
      <Card
        user="Devesh Mansabdar"
        src="https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000" age={14}
      />
    </div>
  );
};

export default App;
