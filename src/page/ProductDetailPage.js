import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  // 이훅을 이용하면 useParams값을 가져올 수 있다.
  //   const params = useParams();

  // Destructuring
  // objetct를 return값으로 받을 적에 거기 안에 키값을 딱 멘션을 하면, {id} 이 키값을 바로 사용할 수 있다.
  const { id } = useParams();

  //   console.log("ppp", params);
  //   console.log("ppp", id);
  return (
    <div>
      <h1>Show Product Detail{id}</h1>
    </div>
  );
}

export default ProductDetailPage;
