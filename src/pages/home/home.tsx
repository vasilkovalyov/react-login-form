import { Button } from '@/src/components/ui';
import { Page } from '@/src/constants/pages';
import { useAppSelector } from '@/src/redux';

export default function HomePage() {
  const userStore = useAppSelector((store) => store.userSlice);

  return (
    <div className="button-wrapper">
      <Button variant="fill" href={Page.LOGIN}>
        Login
      </Button>
      {userStore.isAuth && (
        <>
          <Button variant="fill" href={Page.NEW_PASSWORD}>
            New password
          </Button>
          <Button variant="fill" href={Page.LOGIN}>
            Log out
          </Button>
        </>
      )}
    </div>
  );
}
