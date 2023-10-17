import Header from "./components/Header";
function App() {
  const data = "test data";
  return (
    <div>
      <Header data={data} />
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
