import Link from "next/link";

export default function StudentInfo() {
  return (
    <>
      <h1>My info</h1>
      <p>My name: Khitdhikhun Klinsang (Khit)</p>
      <p>Course section: CPRG 306 E</p>
      <p>
        <Link href="https://github.com/JustKhit/cprg306-assignments">
          A link to my GitHub repository (https://github.com/JustKhit/cprg306-assignments)
        </Link>
      </p>
    </>
  );
}
