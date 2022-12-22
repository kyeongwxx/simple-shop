import { useContext, useEffect, useState } from 'react';
import { Context1 } from '../App';

export const TabContent = (props) => {
  const {stock} = useContext(Context1)
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
      {props.tabContent === 0 && <div>{stock[0]}</div>}
      {props.tabContent === 1 && <div>{stock[1]}</div>}
      {props.tabContent === 2 && <div>{stock[2]}</div>}
    </div>
  );
};
