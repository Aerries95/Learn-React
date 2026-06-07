import { useEffect, useState } from "react";

export default function MockApi() {
  const [data, setData] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isUnmounted = false;
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1",
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("请求失败");
        const result = await response.json();
        if (!isUnmounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (!isUnmounted && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!isUnmounted) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      isUnmounted = true;
      controller.abort();
    };
  }, []);
  if (loading) return <p>加载中...</p>;
  if (error) return <p>错误: {error}</p>;
  return (
    <div>
      <h3>{data?.title}</h3>
      <p>{data?.body}</p>
    </div>
  );
}
