export const TabContent = (props) => {
  return (
    <>
      {props.tabContent === 0 ? <div>내용0</div> : null}
      {props.tabContent === 1 ? <div>내용1</div> : null}
      {props.tabContent === 2 ? <div>내용2</div> : null}
    </>
  );
};
