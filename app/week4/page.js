import NewItem from "./new-item";

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Create a new item
        </h1>
        <NewItem />
      </div>
    </main>
  );
};

export default Page;
