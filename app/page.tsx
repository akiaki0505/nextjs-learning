"use client";
import { Title } from "./components/Title/Title";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  /*useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);*/

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Title
        title="お問い合わせフォーム"
        num={111}
        array={[111, 222]}
        tuple={["sss", 1]}
        obj={{ foo: "ddd", string: "ccc", num: 123 }}
        boolean={true}
        comp={<h1>foo</h1>}
      />
      <Link href="/input">input</Link>
      <div>{time}</div>
    </>
  );
}
