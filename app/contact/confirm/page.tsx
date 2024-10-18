"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function Page() {
  const router = useRouter();
  const { getValues, handleSubmit } = useFormContext();
  const values = getValues();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT ?? "",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        router.push("/thanks");
      } else {
        router.push("/error");
      }
    } catch (err) {
      router.push("/error");
    }
  });

  return (
    <>
      <h1>Please confirm your submission</h1>
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{values.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{values.email}</td>
            </tr>
            <tr>
              <th>Message</th>
              <td>{values.message}</td>
            </tr>
            <tr>
              <th>add</th>
              <td>{values.add1}</td>
              <td>{values.add2}</td>
            </tr>
            <tr>
              <th>select</th>
              <td>{values.select}</td>
            </tr>
            <tr>
              <th>radio</th>
              <td>{values.radio}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <input type="hidden" id="name" value={values.name} />
          <button type="button" onClick={() => router.push("/contact/input")}>
            Back
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
