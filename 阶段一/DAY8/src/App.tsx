import AutoFocusInput from './components/AutoFocusinput';
import ReactuseRef from './components/ReactuseRef';
import ScrollControlDemo from './components/ScrollControlDemo';
import Timer from './components/Timer';
function App() {
  return (
    <div className="App">
      <ReactuseRef />
      <Timer/>
      <AutoFocusInput/>
      <ScrollControlDemo/>
    </div>
  );
}

export default App;