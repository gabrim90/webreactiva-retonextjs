'use client';

import { useRouter } from 'next/navigation';
import Link from "next/link"

export default function NavLink(props) {
  const router = useRouter();
  
  return (
    <Link  href={props.path} ><span className='text-l px-2  hover:underline text-indigo-800 font-medium	'>{props.title}</span></Link>
  );
}
