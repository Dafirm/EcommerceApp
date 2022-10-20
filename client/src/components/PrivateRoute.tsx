

import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import LoadingToRedirect from "./LoadingToRedirect";

const PrivateRoute = ({ children }:any) => {
  const { user } = useAppSelector((state:RootState) => ({ ...state.auth }));
  return user ? children : <LoadingToRedirect />;
};

export default PrivateRoute;
