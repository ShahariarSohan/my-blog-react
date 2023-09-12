import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmark = (bookmark) => console.log(`bookmarked`);
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="flex justify-between gap-5 mt-10">
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
