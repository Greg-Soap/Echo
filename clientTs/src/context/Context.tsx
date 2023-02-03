import {
  useContext,
  useState,
  createContext,
  useEffect,
  FormEvent,
} from "react";
import { IPosts, IContext } from "../types/Types";

const url = "http://localhost:4000";

export const AppContext = createContext({} as IContext);
export const AppProvider = ({ children }: any) => {
  //State Definition
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState<IPosts[]>([]);
  const [postWrite, setPostWrite] = useState<IPosts>({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    _id: "",
  });

  //Fetch function
  //CREATE POST
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        creator: postWrite.creator,
        title: postWrite.title,
        message: postWrite.message,
        tags: postWrite.tags,
        selectedFile: postWrite.selectedFile,
      }),
    });
    const addedPost = await response.json();
    setPostWrite({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
      _id: "",
    });
    setPostData([...postData, addedPost]);
  };
  //GET POST

  useEffect(() => {
    async function fetchingPosts() {
      setLoading(true);
      try {
        const response = await fetch(`${url}/posts`);
        const Post = await response.json();
        setPostData(Post);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingPosts();
  }, []);

  return (
    <AppContext.Provider
      value={{ handleSubmit, postData, loading, postWrite, setPostWrite }}
    >
      {children}
    </AppContext.Provider>
  );
};
//Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
