import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="flex justify-between gap-5">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
