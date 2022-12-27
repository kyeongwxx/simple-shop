import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const Cart = () => {
  const data = useSelector((state) => state.data);

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, idx) => (
          <tr key={idx}>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.count}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
