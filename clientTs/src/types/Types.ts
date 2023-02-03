export interface IPosts {
  _id: string;
  title: string;
  selectedFile: string;
  creator: string;
  message: string;
  tags: string;
  addedPost?: any;
}
export interface IContext {
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  postData: IPosts[];
  loading: boolean;
  postWrite: IPosts;
  setPostWrite: React.Dispatch<React.SetStateAction<IPosts>>;
}
