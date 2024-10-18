import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.post.findMany();
  console.log(users);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul>
        <ul>
          {users.map((post) => (
            <li key={post.id} className="border-b py-2">
              <p>Name: {post.username}</p>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}
