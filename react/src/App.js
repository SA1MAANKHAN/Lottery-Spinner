import "./App.css";
import Wheel from "lottery-wheel";

function App() {
  const wheel = new Wheel({
    el: document.getElementById("wheel"),
    data: [
      {
        text: "apple",
        chance: 20,
      },
      {
        text: "banana",
      },
      {
        text: "orange",
      },
      {
        text: "peach",
      },
    ],
    onSuccess(data) {
      console.log(data.text);
    },
  });

  return (
    <div className="app">
      <div id="wheel"></div>
    </div>
  );
}

export default App;
