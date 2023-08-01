/** @format */

import React from 'react';

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: React.ReactNode;
}

export const FileUpload: React.FC<FileUploadProps> = ({ setFile, accept, children }) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]);
  };
  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};
