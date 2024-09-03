interface DataBlogsType {
  dataSource: Array<{
    key: string;
    title: string;
    tag: string;
    photo: string;
    date: string;
    description: string;
  }>;
  error: string;
  loading: boolean;
}

export default DataBlogsType;
