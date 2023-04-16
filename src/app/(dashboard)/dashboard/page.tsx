import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { FC } from 'react';

const page = async ({}) => {
  const session = await getServerSession(authOptions);
  return <div>{JSON.stringify(session)}</div>;
};

export default page;
