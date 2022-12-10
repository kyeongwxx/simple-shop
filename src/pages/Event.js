import { Outlet } from "react-router-dom";

export const Event = () => {
  return (
    <>
      <div>오늘의 이벤트</div>
      <Outlet></Outlet>
    </>
  );
};
