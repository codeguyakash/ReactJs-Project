import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import Comment from "./Comment";
import Loader from "./Loader";
// import { useNavigate } from "react-router-dom";
import NavbarDashboard from "./NavbarDashboard";

function Dashboard() {
  // const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [noMore, setNoMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=20`
      );
      const data = await res.json();
      setItems(data);
    };
    getComments();
  }, []);
  console.log(items);

  const fetchComments = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=20`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    // console.log("Bottom")
    const commentsForServer = await fetchComments();

    setItems([...items, ...commentsForServer]);

    if (commentsForServer.length === 0 || commentsForServer.length < 20) {
      setNoMore(false);
    }
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={noMore}
      loader={<Loader />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Thank You !</b>
        </p>
      }
    >
      <NavbarDashboard />
      <div className="container-fluid">
        <div className="row bg-success">
          <div className="col-xl-12 pb-4 pt-2">
            <h1 className="text-white shadow-lg pt-2 pb-2">
              Welcome to Dashboard
            </h1>
          </div>
          {items.map((item) => {
            return <Comment key={item.id} item={item} />;
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
}
export default Dashboard;
