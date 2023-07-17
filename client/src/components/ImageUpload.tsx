'use client';

import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { useCallback } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';

import { ResultImageUpload } from '@/interfaces';

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload = ({ onChange, value }: ImageUploadProps) => {
  const handleUpload = useCallback(
    (result: ResultImageUpload) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="ydmtcvdh"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative cursor-pointer hover:opacity-70 transition bg-button-gradient p-[0.15rem] rounded-xl flex justify-center items-center gap-4 text-neutral-600"
          >
            <div className="bg-white w-full h-full rounded-xl flex flex-col justify-center items-center gap-2 p-8">
              <TbPhotoPlus size={50} className="text-zinc-800" />
              <p className="font-semibold text-lg text-zinc-800">
                Click to upload
              </p>
            </div>
            {value && (
              <div className="absolute inset-0 rounded-xl p-1 w-full h-full">
                <Image
                  alt="Upload"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="p-[0.15rem] rounded-xl"
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
