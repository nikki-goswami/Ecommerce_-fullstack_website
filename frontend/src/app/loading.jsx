export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      
      <div className="relative w-16 h-16">
        {/* Background Circle */}
        <div className="absolute inset-0 rounded-full border-4 border-black"></div>

        {/* Gradient Spinner */}
        <div className="absolute inset-0 rounded-full border-4 
                        border-t-transparent 
                        border-l-blue-500 
                        border-r-purple-500 
                        border-b-pink-500 
                        animate-spin">
        </div>
      </div>

    </div>
  );
}
