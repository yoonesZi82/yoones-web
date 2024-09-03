interface DataMessageType {
  dataSource: Array<{
    key: string;
    text: string;
    name: string;
    phone: string;
    email: string;
    date: string;
  }>;
  error: string;
  loading: boolean;
}

export default DataMessageType;
