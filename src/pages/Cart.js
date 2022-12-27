import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';

export const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      {state.user}의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((el, idx) => (
            <tr key={idx}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.count}</td>
              <td>
                <button onClick={() => dispatch(changeName())}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
