"use client";

import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      {user ? (
        <div>
          <p className="text-slate-950">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={async () => await firebaseSignOut()}
          >
            Sign out
          </button>
        </div>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={async () => await gitHubSignIn()}
        >
          Login
        </button>
      )}
    </main>
  );
};

export default Page;
