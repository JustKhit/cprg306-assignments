import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Page() {
  return (
    <div>
      <main>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo/>
        <p>
        <Link href="../week2">
          Head to Week2 here
        </Link>
      </p>
      </main>
    </div>
  );
}
