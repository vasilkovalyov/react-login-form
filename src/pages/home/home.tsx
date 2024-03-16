import { Page } from '@/src/constants/pages';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <Link to={Page.LOGIN}>Login</Link>
    </div>
  );
}
