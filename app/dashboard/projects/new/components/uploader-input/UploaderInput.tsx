import { Spin, Upload, UploadFile, Image } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;
type UploadInputProps = {
  setValue: UseFormSetValue<{
    title: string;
    tag: string;
    link: string;
    image: string;
  }>;
  defaultValue?: string;
};

function UploadInput({ setValue, defaultValue }: UploadInputProps) {
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [file, setFile] = useState<UploadFile<any> | undefined>(
    defaultValue
      ? {
          uid: defaultValue,
          name: defaultValue,
          url: defaultValue,
          status: "done",
        }
      : undefined
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (file?.status === "done") {
      setValue("image", `http://localhost:3000/upload/projects/${file.name}`);
    } else {
      setValue("image", "");
    }
  }, [file?.status]);

  const previewLoad = () => {
    if (file) {
      setPreviewImage(file.url || (file.preview as string));
      setPreviewOpen(true);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {loading ? (
        <Spin />
      ) : (
        <>
          <Dragger
            listType="picture"
            maxCount={1}
            accept="image/*"
            action="/api/upload/projects"
            fileList={file ? [file] : undefined}
            onPreview={previewLoad}
            onChange={(info) => {
              if (info.file.status === "removed") {
                setLoading(true);
                axios
                  .post("/api/upload/projects/delete", {
                    imgName: info.file.name,
                  })
                  .then((res) => res.status === 200 && setFile(undefined))
                  .catch(() =>
                    setFile({
                      uid: info.file.uid,
                      name: info.file.name,
                      status: "error",
                    })
                  )
                  .finally(() => setLoading(false));
              } else if (info.file.status === "done") {
                setFile({
                  uid: info.file.uid,
                  name: info.file.response.imgName,
                  url: "/upload/projects/" + info.file.response.imgName,
                  status: "done",
                });
              } else {
                setFile(info.file);
              }
            }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined color="#fff" />
            </p>
            <p className="text-meloWhite ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="text-meloWhite ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
          {previewImage && (
            <Image
              wrapperStyle={{ display: "none" }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}
        </>
      )}
    </div>
  );
}

export default UploadInput;
