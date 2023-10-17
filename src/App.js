import Header from "./components/Header";
import Description from "./components/Description";
import Body from "./components/Body";
function App() {
  const data = "test data";
  const description="header desdcription"
  return (
    <div>
      <Header data={data} />
      <Description data={description}/>
      <Body data={data}/>
      
    </div>
  );
}

export default App;
