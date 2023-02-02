import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="Body">
        <Form />
        <Posts />
      </div>
    </>
  );
}
