import { Outlet } from "react-router-dom";

export const Event = () => {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  );
};
