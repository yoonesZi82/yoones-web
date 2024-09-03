interface LatestProps {
  title: string;
  cartData: Array<{
    _id: string;
    src: string;
    title: string;
    date: string;
    tag: string;
    type: string;
    link?: string;
    description?: string;
  }>;
  error?: string;
  loading: boolean;
  total?: number;
  currentPage?: (current: number, size: number) => void;
}

export default LatestProps;
