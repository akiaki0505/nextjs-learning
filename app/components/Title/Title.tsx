import React from "react";

//jsxの書き方　型指定する必要なし
/*export function Title(props) {
  console.log(props);
  return (
    <>
      <title>{props.title}</title>
      <button onClick={props.onClick}>ボタン</button>
    </>
  );
}*/

//tsxの書き方　型指定する必要あり
type Props = {
  title: string;
  num: number;
  array: number[];
  tuple: [string, number];
  obj: {
    foo: string;
    string: string;
    num: number;
  };
  boolean: boolean;
  comp: React.ReactNode;
};
export function Title({ title, num, array, tuple, obj, boolean, comp }: Props) {
  return (
    <>
      <title>{title}</title>
    </>
  );
}

//アロー関数での書き方
/*type Props = {
  title: string;
};
export const Title = ({ title }: Props) => {
  return (
    <title>{title}</title>
  )
}*/
