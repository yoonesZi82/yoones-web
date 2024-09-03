interface DataSkillType {
  dataSource: Array<{
    key: string;
    tag: string;
    photo: string;
    date: string;
    rate: number;
  }>;
  error: string;
  loading: boolean;
}

export default DataSkillType;
