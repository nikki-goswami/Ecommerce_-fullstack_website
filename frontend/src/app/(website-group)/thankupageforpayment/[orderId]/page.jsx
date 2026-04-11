export default async function ThankYouPage({ params }) {
  const promise = await params
  const orderId = promise.orderId

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">

        <h1 className="text-2xl font-bold text-green-600">
          Payment Successful 🎉
        </h1>

        <p className="mt-4 text-gray-600">
          Your order has been placed successfully.
        </p>

        <div className="mt-4 bg-gray-100 p-3 rounded-lg">
          Order ID: <span className="font-semibold">#{orderId}</span>
        </div>

        <div className="mt-6 space-y-3">
          <a
            href="/orders"
            className="block w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            View Orders
          </a>

          <a
            href="/"
            className="block w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Continue Shopping
          </a>
        </div>

      </div>
    </div>
  );
}
