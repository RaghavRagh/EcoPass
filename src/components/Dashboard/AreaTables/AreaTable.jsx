import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Name",
  "Category",
  "Description",
  "Price",
  "Status",
  "Action",
];

// const TABLE_DATA = [
//   {
//     id: 100,
//     name: "Iphone 13 Pro",
//     order_id: 11232,
//     date: "Jun 29,2022",
//     customer: "Afaq Karim",
//     status: "delivered",
//     amount: 400,
//   },
//   {
//     id: 101,
//     name: "Macbook Pro",
//     order_id: 11232,
//     date: "Jun 29,2022",
//     customer: "Afaq Karim",
//     status: "pending",
//     amount: 288,
//   },
//   {
//     id: 102,
//     name: "Apple Watch",
//     order_id: 11232,
//     date: "Jun 29,2022",
//     customer: "Afaq Karim",
//     status: "canceled",
//     amount: 500,
//   },
//   {
//     id: 103,
//     name: "Microsoft Book",
//     order_id: 11232,
//     date: "Jun 29,2022",
//     customer: "Afaq Karim",
//     status: "delivered",
//     amount: 100,
//   },
//   {
//     id: 104,
//     name: "Apple Pen",
//     order_id: 11232,
//     date: "Jun 29,2022",
//     customer: "Afaq Karim",
//     status: "delivered",
//     amount: 60,
//   },
//   {
//     id: 105,
//     name: "Airpods",
//     order_id: 11232,
//     date: "Jun 29,2022",
//     customer: "Afaq Karim",
//     status: "delivered",
//     amount: 80,
//   },
// ];

const AreaTable = ({products,handleAddProduct,addProduct,handleInput}) => {
  console.log(products,'products')
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products && products?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.category}</td>
                  <td>{dataItem.description}</td>
                  <td>${dataItem.price.toFixed(2)}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>

                  </td>
                  <td className="dt-cell-action">
                    <AreaTableAction handleAddProduct={handleAddProduct} addProduct={addProduct} handleInput={handleInput} dataItem={dataItem}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;