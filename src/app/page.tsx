import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Bine ați venit la Orex.site
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Acest site este în dezvoltare
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <p className="text-gray-700 dark:text-gray-300">
            Server de test Next.js + Nodes.js 444 55
          </p>
        </div>
      </main>
    </div>
  );
}
