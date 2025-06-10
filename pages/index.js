export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/dashboard",
      permanent: ture,
    },
  };
}

export default function Home() {
  return null;
}
