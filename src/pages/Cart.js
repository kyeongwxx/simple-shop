import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const Cart = () => {
  const data = useSelector((state) => state.data);
  console.log(data);

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
        <tr>
          <td>{data[0].id}</td>
          <td>{data[0].name}</td>
          <td>{data[0].count}</td>
        </tr>
        <tr>
          <td>{data[1].id}</td>
          <td>{data[1].name}</td>
          <td>{data[1].count}</td>
        </tr>
      </tbody>
    </Table>
  );
};
