import { useRef } from "react";

const AutoFocusInput = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.RefObject<HTMLInputElement | null>,
  ) => {
    if (e.key === "Enter") {
      nextRef.current?.focus();
    }
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <input
        ref={nameRef}
        onKeyDown={(e) => handleEnter(e, pwdRef)}
        placeholder="请输入用户名"
      />
      <input
        ref={pwdRef}
        onKeyDown={(e) => handleEnter(e, phoneRef)}
        placeholder="请输入密码"
      />
      <input ref={phoneRef} placeholder="请输入手机号" />
      <button>提交</button>
    </div>
  );
};
export default AutoFocusInput;
