import { getUserByid } from '@/app/lib/settings';
import { notFound } from 'next/navigation';
async function User({ params }: { params: { id: string } }) {
  const { name, id, username, website } = await getUserByid(params.id);

  if (!name) {
    notFound();
  }
  return (
    <div>
      <h1 className='text-2xl font-bold'>user Page</h1>
      <div className='border border-dashed border-red-500 p-4'>
        <p>Name: {name}</p>
        <p>Id: {id}</p>
        <p>UserName: {username}</p>
        <p>WebSite: {website}</p>
      </div>
      <div className='mt-5'></div>
    </div>
  );
}

export default User;
