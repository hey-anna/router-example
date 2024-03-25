// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Homepage } from "./page/Homepage";
import { Aboutpage } from "./page/Aboutpage";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProductPage } from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import { LoginPage } from "./page/LoginPage";
import { UserPage } from "./page/UserPage";

// Route = 경로
// 웹페이지를 여러개 만들건데 각각의 웹페이지를 가기 위한 경로가 필요하다.

// 리액트 라우터라는 라이브러리가, 상황에 맞춰서 페이지를 보여준다.
// > 왔다갔다 스위치를 해줄 것이다.

// path는 바뀌는 주소를 나타내는 것(각 페이지의 주소)
// element는 이 주소 일때 보여주고 싶은 페이지가 먼지
// home /

// 쇼핑몰페이지를 만들건데,
// 상품들을 쫙 보여줄수 있는페이지가 중요하다
// 바자의 디테일페이지

// 요즘 핫하고 유명한 디자인이 restful routes
// 어떤 url 디자인 패턴임

// 전체 아이템을 다 보여주고 싶다.
// 그럴때는 무슨 url을 쓴다? /subjects

// HTTP Vert 4가지 : Get, Post, Put, Delete
// 우리가 여태까지 사용한게 Get이다 - 정보를 가져오는 것
// Get : 우리가 지금까지 fetch해서 데이터 가져올 때 항상 쓴 명령어다
// Post : 새로운 데이터를 만들때 씀/ 새로운 게시물을 생성할때 사용
// Put : 기존 데이터를 수정할 때 사용
// Delete : 데이터 삭제

// 이 4가지와 url을 매치시켜서 사용하는 것이다

// 다보여주고 싶다 /subjects / Show allitems

// 하나만 보여주고 싶다 / 바지를 보여주고 싶다 / 치마를 보여 주고싶다 /subjects/:id
// :id 컬럼이 보이죠?, : 컬럼이 있다는 것은 파라미터라는 뜻
// url도 파라미터 값을 넘길 수 있다.
// :id , 여기 들어가는 값은 가변적이다. / 변하는 값이다
// :id 이 아이템값을 가진 아이템 하나를 보여준다.

// http://localhost:3000/products?q=skir&num=2&page=3

function App() {
  // 가면 안되는 페이지 - 마지막으로 배우자
  // 로그인하 유저만 유저페이지가 보임
  // 로그인 안했을때 , 접근한다면 로그인하세요 나옴 - 경로에 상황에 맞줘서 다르게 보여주는 것

  // 로그인안되서 로그인 페이지로 확 꺽어주는거 리다이렉트(redirect)

  // redirect 만들기 (컴포넌트, 대문자자너)
  // 나중에 얘를 따로 파일만들어서 하면 좋긴한데, 오늘은 심플하게 해보자
  // 유저로그인하면 유저페이지 보여주고, 로그인안했으면 로그인 페이지 안보여주고

  const [authenticate, setAuthenticate] = useState(false);
  // false 면 유저가 로그인안한거고
  // true 면 유저가 로그인한거고
  // 이렇게 하는 이유는 백엔드 를 지금 당장할수 없자나 가정 하는것

  // 아니면 리다이렉트를 해주는데, redirect를 해주는 Navigate
  // ** Navigate (useNavigate랑 틀림)**
  // useNavigate는 reacthook function이고
  // redirect Navigate는 컴포넌트 이다.
  // Navigate컴포넌틑는 redirect하게 도와준다. 이 Navigate가 이 /login 경로를 호출을 하게 됨

  // 이렇게 하게되면 로그인페이지 만들어놓은것
  const PrivateRoute = () => {
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <>
      <Routes>
        {/* path="/intro" element={<Intro />} */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        {/* <Route path="/products/:id/:num" element={<ProductDetailPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </>
  );
}

export default App;
