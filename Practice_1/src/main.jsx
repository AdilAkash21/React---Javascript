import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   );
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: "https://www.youtube.com",
//     target: "_blank",
//     children: "Click me to visit youtube",
//   },
// };

const anotherElement = (
  <a href="https://www.youtube.com" target="_blank">
    Visit youtube
  </a>
);

// const anotherUser = "Adil AKash";

// const reactElement = React.createElement(
//   "a",
//   { href: "https://www.youtube.com", target: "_blank" },
//   "Click me to visit youtube",
//   anotherUser,
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <>
//     {anotherElement}
//     {reactElement}
//   </>
// );

// root.render(<App />);

// root.render(reactElement);

root.render(anotherElement);