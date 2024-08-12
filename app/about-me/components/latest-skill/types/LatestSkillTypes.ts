interface LatestSkillTypes {
  title: string;
  cartData: Array<{
    id: string;
    src: string;
    title: string;
    rate: number;
  }>;
  error: string;
  loading: boolean;
  total: number;
  currentPage: (current: number, size: number) => void;
}

export default LatestSkillTypes;
