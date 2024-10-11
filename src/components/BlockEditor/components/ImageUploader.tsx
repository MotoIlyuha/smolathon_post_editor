import React, {useState} from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type {GetProp, UploadFile, UploadProps} from 'antd';
import { message, Upload } from 'antd';
import {useApp} from "@/provider/AppProvider";
import {UploadChangeParam} from "antd/es/upload";
import {getBase64} from "@/utils/getBase64";

const { Dragger } = Upload;

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export default function ImageUploader({setOpen}: {setOpen: (open: boolean) => void}) {
  const {setBgImageUrl, setLoading} = useApp()

  const handleDone = (file: UploadFile) => {
    getBase64(file.originFileObj as FileType).then(f => {
      setBgImageUrl(f);
      console.log(f);
      setLoading(false);
      setOpen(false);
    }).catch(e => console.error(e));
  }

  const handleChange = async (info: UploadChangeParam<UploadFile<any>>) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      setBgImageUrl(e.target?.result as string);
      setLoading(false);
    }
    if (info.file.status === 'removed') {
      console.log("REMOVED");
      handleDone(info.file);
      return;
    }
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      console.log("DONE");
      handleDone(info.file.originFileObj as FileType);
      return;
    }
  };

  const props: UploadProps = {
    name: 'file',
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props} style={{maxWidth: 400}} onChange={handleChange}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Нажмите или перетащите файл в эту область, чтобы загрузить
      </p>
      <p className="ant-upload-hint">
        Строго запрещено загружать данные компании или другие запрещенные файлы.
      </p>
    </Dragger>
  )
}
