import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/doneaza',
      permanent: false,
    },
  };
};

const Page = () => {
  return null; // Acest component nu va fi afișat pentru că pagina se redirecționează.
};

export default Page;
