"use client";
import { Alert, Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import {
  PiPhoneCall,
  PiMapPin,
  PiEnvelope,
  PiSmileyBold,
  PiSmileySadBold,
} from "react-icons/pi";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ContactSchema from "./form-schema/schema";
import axios from "axios";
import NameInput from "./name-input/NameInput";
import EmailInput from "./email-input/EmailInput";
import TextInput from "./text-input/TextInput";
import PhoneInput from "./phone-input/PhoneInput";
import CheckboxInput from "./check-input/CheckboxInput";
import ButtonForm from "./button-input/ButtonInput";

type SendInfoSchemaType = z.infer<typeof ContactSchema>;

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendInfoSchemaType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      text: "",
      name: "",
      email: "",
      phone: "",
      checkbox: false,
    },
  });

  useEffect(() => {
    const items = localStorage.getItem("items");
    if (items) {
      reset({
        name: JSON.parse(items).name,
        email: JSON.parse(items).email,
        phone: JSON.parse(items).phone,
      });
    } else {
      reset();
    }
  }, []);

  const onSubmit: SubmitHandler<SendInfoSchemaType> = async (data) => {
    setLoading(true);

    // axios({
    //   method: "POST",
    //   url: "/api/messages/create",
    //   data: data,
    // })
    //   .then((res) => {
    //     if (res.status === 200) {
    //       // countDown(200);
    //       setLoading(false);
    //     } else {
    //       // countDown(res.status);
    //       setLoading(false);
    //     }
    //   })
    //   .catch((err) => setError("در ارسال پیام خطایی رخ داده است"))
    //   .finally(() => setLoading(false));

    if (data.checkbox) {
      localStorage.setItem("items", JSON.stringify(data));
    }
    const items = localStorage.getItem("items");
    if (items) {
      reset({
        text: "",
        name: JSON.parse(items).name,
        email: JSON.parse(items).email,
        phone: JSON.parse(items).phone,
      });
    } else {
      reset();
    }
  };

  return (
    <>
      <div className="gap-20 grid grid-cols-1 desktop:grid-cols-2 laptop:grid-cols-2 mobile:grid-cols-1 tablet:grid-cols-1 my-32">
        <div className="flex flex-col justify-start items-start gap-4">
          <h1 className="font-medium text-5xl text-dark-blue-color">
            {" "}
            How can I help you?{" "}
          </h1>
          <p className="text-right mt-4 max-w-[95%] font-medium text-3xl text-normal-blue">
            Lorem Epsom fake text with the production of incomprehensible
            simplicity from the printing industry and with The use of graphic
            designers is printers and texts, but also newspapers and magazines
            Columns and rows as necessary and for the current conditions of the
            technology required{" "}
          </p>
          <div className="flex flex-col justify-start items-start gap-8 mt-6">
            <div className="flex justify-start items-center gap-4">
              <div className="flex justify-center items-center bg-[#333] p-5 rounded-[50%]">
                <PiMapPin size={25} color="#ecf6fa" />
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="font-medium text-3xl text-normalBlack">
                  Address
                </h1>
                <p className="font-medium text-[#333] text-2xl">
                  Isfahan, Isfahan, Imam Khomeini St., East Sharif St., Alley
                  47, Alley Shahid Ibnili, 4 Alley, Esmaili Complex, Unit 4{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="flex justify-center items-center bg-[#333] p-5 rounded-[50%]">
                <PiPhoneCall size={25} color="#ecf6fa" />
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="font-medium text-3xl text-normalBlack">
                  Phone{" "}
                </h1>
                <p className="font-medium text-[#333] text-2xl">09912209730</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="flex justify-center items-center bg-[#333] p-5 rounded-[50%]">
                <PiEnvelope size={25} color="#ecf6fa" />
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="font-medium text-3xl text-normalBlack">Emial</h1>
                <p className="font-medium text-[#333] text-2xl">
                  yoones.zamani8082@yahoo.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center desktop:items-start laptop:items-center mobile:items-center tablet:items-start gap-5 bg-[#333] p-16 border border-solid rounded-xl w-full h-full">
          <h1 className="font-medium text-5xl text-meloWhite">Text Me</h1>
          <p className="font-medium text-2xl text-meloWhite">
            Your email will not be published, fill all the fields{" "}
          </p>
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-3">
              <TextInput control={control} error={errors.text?.message} />
            </div>
            <div className="flex desktop:flex-row tablet:flex-row flex-col laptop:flex-col mobile:flex-col gap-5">
              <div className="flex flex-col gap-3">
                <NameInput control={control} error={errors.name?.message} />
              </div>
              <div className="flex flex-col gap-3">
                <EmailInput control={control} error={errors.email?.message} />
              </div>
              <div className="flex flex-col gap-3">
                <PhoneInput control={control} error={errors.phone?.message} />
              </div>
            </div>
            <CheckboxInput control={control} error={errors.checkbox?.message} />
            <ButtonForm loading={loading} />
            {error ? (
              <Alert
                message={error}
                type="error"
                showIcon
                className="mt-2 h-[32px] text-[12px]"
              />
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
