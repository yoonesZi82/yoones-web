interface ModalType {
    type: string
  title: string;
  open: boolean;
  onCancel: () => void;
  handleCancel: () => void;
  confirmDelete?: () => void;
  confirmEdit?: () => void;
}

export default ModalType;
