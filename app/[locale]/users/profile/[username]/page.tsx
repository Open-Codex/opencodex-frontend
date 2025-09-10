import UserPage from './UserProfile';

interface Props {
  params: {
    username: string;
  };
}

const Page = async ({ params }: Props) => {
  const { username } = await params;
  return <UserPage username={username} />;
}

export default Page;