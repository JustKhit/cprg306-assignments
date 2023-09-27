import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="mb-6 bg-gray-50 p-4 rounded-md shadow-sm text-gray-600">
      <h2 className="text-xl font-semibold mb-2">My info</h2>
      <div className="mb-2">
        <span className="font-medium">Name:</span> Khitdhikhun Klinsang (Khit)
      </div>
      <div className="mb-2">
        <span className="font-medium">Course Section:</span> CPRG 306 E
      </div>
      <div className="mb-2">
        <span className="font-medium">GitHub Repository:</span>
        <Link
          className="text-indigo-600 hover:underline ml-1"
          href="https://github.com/JustKhit/cprg306-assignments"
        >
          https://github.com/JustKhit/cprg306-assignments
        </Link>
      </div>
    </div>
  );
}
