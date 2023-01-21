'use client';

import { useRouter } from 'next/navigation';
import Link from "next/link"

export default function NavLink(props) {
  const router = useRouter();
  console.log({router: router})
  
  return (
    <Link className='rounded-lg px-2 py-2 text-sm bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300' href={props.path} >{props.title} {router.pathname}</Link>
  );
}
