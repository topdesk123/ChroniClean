export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">ChroniClean</h1>
      <p className="text-xl mb-8">Professional Cleaning Services</p>
      <div className="space-y-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Place Order
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
          Track Order
        </button>
      </div>
    </main>
  )
}