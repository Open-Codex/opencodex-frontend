import UserPage from './UserProfile';

interface Props {
  params: {
    username: string;
  };
}

const Page = ({ params }: Props) => {
  return <UserPage username={params.username} />;
}

export default Page;