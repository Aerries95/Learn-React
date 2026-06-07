import { useState } from "react";
import "./DynamicClass.css";
export default function DynamicClass() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="box">
      <div className="section">
        <h3>用户状态</h3>
        {isLogged ? (
          <div>
            <p>欢迎回来</p>
            <Gouwu />
          </div>
        ) : (
          <p>请先登录</p>
        )}
        {!isLogged ? (
          <div>
            <input
              type="text"
              placeholder="用户名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}
        {!isLogged ? (
          <button
            onClick={() => {
              if (username === "admin" && password === "123456") {
                setIsLogged(true);
              }
            }}
          >
            登录
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLogged(false);
            }}
          >
            退出登录
          </button>
        )}
      </div>
    </div>
  );
}

export function Gouwu() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState([""]);
  const [wuping, setWuping] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const mockProducts = [
    { id: 1, name: "React 实战教程", price: 59, category: "books", stock: 12 },
    { id: 2, name: "TypeScript 入门", price: 49, category: "books", stock: 0 },
    { id: 3, name: "机械键盘", price: 299, category: "electronics", stock: 5 },
    { id: 4, name: "无线耳机", price: 199, category: "electronics", stock: 8 },
    {
      id: 5,
      name: "JavaScript 高级程序设计",
      price: 79,
      category: "books",
      stock: 3,
    },
  ];
  const filteredProducts = mockProducts.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }
    if (priceFilter === "高于100" && product.price >= 100) {
      return false;
    }
    if (priceFilter === "低于100" && product.price < 100) {
      return false;
    }
    return true;
  });
  return (
    <div className="section">
      <div>
        <input
          onChange={(e) => setWuping(e.target.value)}
          className="shopping"
          type="text"
          placeholder="需要购买的东西"
          value={wuping}
        />
        <button
          onClick={() => {
            if (wuping.trim() !== "") {
              setItem([...item, wuping]);
              setWuping("");
              setCount(count + 1);
            }
          }}
        >
          添加到购物车
        </button>
      </div>
      {count > 0 ? (
        <div>
          <p>购物车有{count}件商品</p>
          <ul>
            {item.map((wuping, index) => (
              <li key={index}>{wuping}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>购物车空空如也</p>
      )}
      <div>
        <h3>商品列表</h3>
        <label>分类:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">全部</option>
          <option value="books">图书</option>
          <option value="electronics">电子产品</option>
        </select>
        <label>价格:</label>
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="all">全部</option>
          <option value="高于100">高于100</option>
          <option value="低于100">低于100</option>
        </select>
        {filteredProducts.length > 0 ? (
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id}>
                {product.name} - ¥{product.price} - 库存: {product.stock}
              </li>
            ))}
          </ul>
        ) : (
          <p>没有找到符合条件的商品</p>
        )}
      </div>
    </div>
  );
}
