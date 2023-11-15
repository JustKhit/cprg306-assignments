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
            Head to Week2 here (Introduction to React)
          </Link>
        </p>
        <p className="mt-4">
          <Link className="text-indigo-600 hover:underline" href="../week3">
            Head to Week3 here (Components and Props)
          </Link>
        </p>
        <p className="mt-4">
          <Link className="text-indigo-600 hover:underline" href="../week4">
            Head to Week4 here (Interactivity)
          </Link>
        </p>
        <p className="mt-4">
          <Link className="text-indigo-600 hover:underline" href="../week5">
            Head to Week5 here (Handling Lists)
          </Link>
        </p>
        <p className="mt-4">
          <Link className="text-indigo-600 hover:underline" href="../week6">
            Head to Week6 here (Managing State)
          </Link>
        </p>
        <p className="mt-4">
          <Link className="text-indigo-600 hover:underline" href="../week7">
            Head to Week7 here (Fetching Data)
          </Link>
        </p>
        <p className="mt-4">
          <Link className="text-indigo-600 hover:underline" href="../week8">
            Head to Week8 here (Firebase Auth)
          </Link>
        </p>
      </main>
    </div>
  );
}
