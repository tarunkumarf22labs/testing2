import React from 'react';
import ImageGallery from '@/components/ImageGallery/ImageGallery';
import { GetServerSideProps } from 'next';
import { IHomeInterface } from 'src/Interface';
import NetWrapper from 'src/Network/netWrapper';
import Layout from '@/components/Layout';
import { ImageGalleryProps } from 'src/Props';

export default function GalleryPage(data: IHomeInterface) {
  const villaData = data?.data?.data;

  return (
    <Layout title="LuxUnlock">
      {data.error === null ? (
        <div>
          <ImageGallery {...ImageGalleryProps(villaData)} />
        </div>
      ) : (
        <div className="w-full h-[500px] flex justify-center items-center">
          <h1 className="text-2xl">{data.error}</h1>
        </div>
      )}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: IHomeInterface | null;
  error: string | null;
}> = async (context): Promise<any> => {
  const encodedPropertyName = Array.isArray(context.params.propertyName)
    ? encodeURIComponent(context.params.propertyName[0])
    : encodeURIComponent(context.params.propertyName);

  const { data, error, status } = await NetWrapper(
    `api/properties/${encodedPropertyName}`
  );
  if (!data) {
    return {
      notFound: true,
    }
  }
  return { props: { data, error } };
};
