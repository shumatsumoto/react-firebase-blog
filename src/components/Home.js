import React, { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firabase";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextConteiner">
          テキスト テキスト テキスト テキスト テキスト テキスト テキスト
          テキスト テキスト テキスト テキスト テキスト
        </div>
        <div className="nameAndDeleteButton">
          <h3>@shumatsumoto</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
