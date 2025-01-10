import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        cities={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {/* could also do onSelectItem={(item: string) => console.log(item)} */}
      {alertVisible && <Alert children="This is an alert" onClose={() => setAlertVisibility(false)}></Alert>}
      <Button onClick={() => setAlertVisibility(true)}>Submit</Button>
    </div>
  );
}

export default App;
