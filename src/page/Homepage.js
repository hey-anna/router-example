import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Homepage = () => {
  // 약간 <a>태그처럼 작동을 하는데, 라우터간에 점핑 움직일 수 있게 도와주는 링크
  // 링크 to 어디로 가고 싶니?

  // 검색 조건을 추가했다고 가정
  // ? 쿼리 뒤에 있는 값은 url 경로에 영향을 미치지 않는다.
  // 옵셔널한 추가적인 정보(선택적인 정보)
  // 쿼리 뒤에 미친듯이 붙여도 항상 같은 페이지가 나옴

  // 근데 url 파라미터값을 여러개 붙이면? 페이지가 안나온다 ??
  // 왜냐 이건 경로 자체가 달라져 버린거거든
  // 뒤에 있는 값을 어떻게 읽어올것인지 알아보자

  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/products?q=pants");
  };
  return (
    <>
      <h1>Homepage!!</h1>
      <Link to="/about">Go to about page</Link>
      <button onClick={goProductPage}>go to product page</button>
    </>
  );
};
