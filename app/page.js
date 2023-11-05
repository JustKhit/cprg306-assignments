import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <main className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <StudentInfo />
        <p className="mt-4">
          <Link className="text-indigo-600 hover:underline" href="../week2">
            Head to Week2 here (Student Info)
          </Link>
        </p>
        <p className="mt-4">
          <Link className="text-indigo-600 hover:underline" href="../week3">
            Head to Week3 here (Shopping List)
          </Link>
        </p>
        <p className="mt-4">
          <Link className="text-indigo-600 hover:underline" href="../week4">
            Head to Week4 here (Create a new item)
          </Link>
        </p>
        <p className="mt-4">
          <Link className="text-indigo-600 hover:underline" href="../week5">
            Head to Week5 here (Sorting)
          </Link>
        </p>
        <p className="mt-4">
          <Link className="text-indigo-600 hover:underline" href="../week6">
            Head to Week6 here (Add a new item)
          </Link>
        </p>
      </main>
    </div>
  );
}
