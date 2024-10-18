"use client";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

export default function Page() {
  const router = useRouter();
  const { register, handleSubmit } = useFormContext();

  const onSubmit = handleSubmit(async () => {
    router.push("/contact/confirm");
  });

  return (
    <>
      <h1>Contact us</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} />
        <br />
        <label htmlFor="email">Email</label>
        <input id="email" {...register("email")} />
        <br />
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register("message")}></textarea>
        <br />
        <label htmlFor="add">add</label>
        <input type="checkbox" id="add1" value={"1"} {...register("add1")} />
        <label>add1</label>
        <input type="checkbox" id="add2" value={"2"} {...register("add2")} />
        <label>add2</label>
        <br />
        <label htmlFor="select">select</label>
        <select id="select" {...register("select")}>
          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
        </select>
        <br />
        <label htmlFor="radio">radio</label>
        <input type="radio" id="radio1" value={"1"} {...register("radio")} />
        <label>add1</label>
        <input type="radio" id="radio2" value={"2"} {...register("radio")} />
        <label>add2</label>
        <br />
        <button type="submit">Confirm</button>
      </form>
    </>
  );
}
