import ThemeProvider from "./components/Context";
import ReactDOM from "react-dom/client";
const App = () => {
  return (
    <div className="App">
      <h1>Context API</h1>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
export default App;
