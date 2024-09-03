interface DataProjectType {
  dataSource: Array<{
    key: string;
    title: string;
    tag: string;
    photo: string;
    date: string;
    link: string;
  }>;
  error: string;
  loading: boolean;
}

export default DataProjectType;
