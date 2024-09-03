import React from "react";
import ModalType from "./types/ModalType";
import { Modal, Button, Result } from "antd";

const ShowModal: React.FC<ModalType> = ({
  type,
  title,
  open,
  onCancel,
  handleCancel,
  confirmDelete,
  confirmEdit,
}) => {
  return (
    <>
      {type === "delete" ? (
        <Modal
          title={title}
          open={open}
          onCancel={onCancel}
          footer={
            <div className="flex justify-center items-center gap-[14px] w-full">
              <Button
                onClick={handleCancel}
                className="border-2 border-normalBlack hover:bg-normalBlack font-medium text-2xl text-normalBlack hover:text-meloWhite transition-colors duration-500 btn"
              >
                {" "}
                cancel
              </Button>
              <Button
                onClick={confirmDelete}
                className="border-2 border-normalBlack hover:border-2 hover:border-normalBlack bg-normalBlack hover:bg-meloWhite font-medium text-2xl text-meloWhite hover:text-normalBlack transition-colors duration-500 btn"
              >
                ok
              </Button>
            </div>
          }
        >
          <Result
            status="warning"
            title="Are you sure about deleting the project?"
          />
        </Modal>
      ) : type === "edit" ? (
        <Modal
          title={title}
          open={open}
          onCancel={handleCancel}
          footer={
            <div className="flex justify-center items-center gap-[14px] w-full">
              <Button
                onClick={handleCancel}
                className="border-2 border-normalBlack hover:bg-normalBlack font-medium text-2xl text-normalBlack hover:text-meloWhite transition-colors duration-500 btn"
              >
                {" "}
                cancel
              </Button>
              <Button
                onClick={confirmEdit}
                className="border-2 border-normalBlack hover:border-2 hover:border-normalBlack bg-normalBlack hover:bg-meloWhite font-medium text-2xl text-meloWhite hover:text-normalBlack transition-colors duration-500 btn"
              >
                ok
              </Button>
            </div>
          }
        >
          <Result
            status="info"
            title="Would you like to see the details of the project?"
          />
        </Modal>
      ) : null}
    </>
  );
};

export default ShowModal;
