import { useEffect, useState } from 'react';

export const TabContent = (props) => {
  const [opacity, setOpacity] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity('opacity-end');
    }, 100);

    return () => {
      clearTimeout(timer);
      setOpacity('');
    };
  }, [props.tabContent]);

  return (
    <div className={`opacity-start ${opacity}`}>
      {props.tabContent === 0 ? <div>내용0</div> : null}
      {props.tabContent === 1 ? <div>내용1</div> : null}
      {props.tabContent === 2 ? <div>내용2</div> : null}
    </div>
  );
};
