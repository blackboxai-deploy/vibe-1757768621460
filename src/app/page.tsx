export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/90">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Hello World! 👋
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-gray-600 text-lg mb-6">
            Welcome to your first Next.js application
          </p>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium">
              Built with Next.js & Tailwind CSS
            </div>
            
            <div className="text-sm text-gray-500">
              Ready to start building something amazing? 🚀
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Made with ❤️ using modern web technologies
          </p>
        </div>
      </div>
    </div>
  )
}