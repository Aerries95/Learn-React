import { useRef } from "react";

const ScrollControlDemo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div ref={scrollRef} style={{ marginTop: "20px" }}>
      <button onClick={scrollToTop}>滚动到顶部</button>
      <button onClick={scrollToTarget}>滚动到目标元素</button>
      <div
        style={{
          height: 180,
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: 10,
          marginTop: 10,
        }}
      ></div>
      <div style={{ height: 600 }}>
        <p>滚动区域内容1</p>
        <p>滚动区域内容2</p>
        <p>滚动区域内容3</p>
        <p>滚动区域内容4</p>
        <p>滚动区域内容5</p>
      </div>
      <div
        ref={targetRef}
        style={{
            marginTop: "20px",
            padding:12,
            backgroundColor:"#f0f0f0",
            borderRadius:6
        }}
      >
        目标元素
      </div>
    </div>
  );
};
export default ScrollControlDemo;

