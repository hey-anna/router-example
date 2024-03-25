import React from "react";
import { useSearchParams } from "react-router-dom"; // useState랑 사용방법이 비슷하다.

export const ProductPage = () => {
  // 근데 url 파라미터값을 여러개 붙이면? 페이지가 안나온다 ??
  // 왜냐 이건 경로 자체가 달라져 버린거거든
  // 뒤에 있는 값을 어떻게 읽어올것인지 알아보자

  // ** 쿼리 값은 이렇게 가져오구나, 문법정도 기억해둬라**

  let [query, setQuery] = useSearchParams();
  console.log("ddd", query.get("q"));
  console.log("eee", query.get("page"));
  return (
    <div>
      <h1>Show All Products!!</h1>
    </div>
  );
};
