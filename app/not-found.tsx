import Link from 'next/link';
import { CONSTANTS } from '@/utils/constants';

export default function NotFound() {
  return (
    <div>
      <h2>{CONSTANTS.NOT_FOUND}</h2>
      <p>Could not find requested resource</p>
      <Link href="/">{CONSTANTS.RETURN_TO_HOME}</Link>
    </div>
  );
}
