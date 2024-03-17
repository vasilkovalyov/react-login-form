import { Button } from 'src/components/ui';
import { Page } from 'src/constants/pages';
import { useAppDispatch, useAppSelector, logoutUser } from 'src/redux';

export default function HomePage() {
  const dispatch = useAppDispatch();

  const userStore = useAppSelector((store) => store.userSlice);

  function onLogout() {
    dispatch(logoutUser());
  }

  return (
    <div className="button-wrapper">
      {!userStore.isAuth ? (
        <Button variant="fill" href={Page.LOGIN}>
          Login
        </Button>
      ) : (
        <>
          <Button variant="outline" href={Page.ADMIN}>
            Admin
          </Button>
          <Button variant="fill" onClick={onLogout}>
            Log out
          </Button>
        </>
      )}
      <Button variant="outline" href={Page.FORGOT_PASSWORD}>
        Forgot password
      </Button>
    </div>
  );
}
