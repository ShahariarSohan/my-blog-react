import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const handleBookmark = (blog) => setBookmarks([...bookmarks, blog]);
  const handleMarkAsRead = (id, time) => {
    setReadTime(readTime + time);
    const newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(newBookmarks);
  };

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="flex justify-between gap-5 mt-10">
        <Blogs
          handleBookmark={handleBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
