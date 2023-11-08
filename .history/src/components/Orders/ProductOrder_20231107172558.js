/** @format */

import React, { useEffect, useState } from "react";
import { getProductOrder } from "../../Repository/Api";

const ProductOrder = () => {
  const [order, setOrder] = useState([]);

  const fetchHandler = () => {
    getProductOrder(setOrder);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  console.log(order);

  return (
    <div className="user_product_order">
      <div className="title_account_second">Product Order history</div>

      {order?.map((item) =>
        item?.products?.map((i, index) => (
          <div className="Items">
            <img src={i.productId?.productImages?.[0]?.image} alt="" className="thumbnaim" />
            <div> </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductOrder;