import { Post } from "./components/Post";

function App() {
  return (
    <div>
      <h1>Hello World!!!</h1>
      <Post 
        author="Alexandre Soares" 
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut leo libero, pharetra a laoreet eget, interdum sed metus." 
      />
    </div>
  );
}

export default App;
