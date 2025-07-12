
const card = () => {
    return (
        <div className='flex gap-12'>
            <div className="relative w-full max-w-md rounded-2xl border border-white/20 bg-black/50 backdrop-blur-xl  shadow-2xl text-white overflow-hidden">

                {/* Header */}
                <div className="p-5 border-b border-white/10 bg-gradient-to-br from-white/0 via-white/0 to-transparent">
                    <h3 className="text-xl font-semibold">✨ Premium Plan</h3>
                    <p className="text-sm text-white/70">Access exclusive features and tools</p>
                </div>

                {/* Image */}
                {/* <div className="h-60 w-full bg-black/0 overflow-hidden border-y border-white/10">
              <img
                src="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg"
                alt="Card visual"
                className="w-full h-full object-cover opacity-80 "
              />
            </div> */}

                {/* Content */}
                <div className="p-5 space-y-3">
                    <p className="text-sm text-white/80 leading-relaxed">
                        Get advanced access to our next-gen tools built for creators and developers.
                        Fast. Secure. Aesthetic. Upgrade your workflow today.
                    </p>
                    <ul className="text-sm text-white/60 list-disc pl-5 space-y-1">
                        <li className=' '>Unlimited API requests</li>
                        <li className=''>Priority support</li>
                        <li className=' '>Custom branding</li>
                    </ul>
                </div>

                {/* Footer */}
                <div className="px-5 py-4 border-t border-white/10 flex justify-end space-x-3">
                    {/* <button
                className="px-5 py-1.5 rounded-xl font-semibold backdrop-blur-md border border-white/20 shadow-md transition-transform duration-150 ease-in-out transform active:scale-100 bg-gradient-to-r from-white/0 to-white/20 hover:opacity-90 text-white text-sm"
              >
                Cancel
              </button> */}
                    <button
                        className="px-7 py-1.5 rounded-lg font-semibold backdrop-blur-md shadow-md transition-transform duration-150 ease-in-out transform active:scale-98 bg-gradient-to-r from-black/0 to-white/10 hover:opacity-90 text-white text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-7 py-1.5 rounded-lg font-semibold backdrop-blur-md  shadow-md transition-transform duration-150 ease-in-out transform active:scale-98 bg-gradient-to-r from-blue-900 to-blue-700 hover:opacity-90 text-white text-sm"
                    >
                        Upgrade Now
                    </button>
                </div>
            </div>
            <div className="relative w-full max-w-md rounded-2xl border border-gray-300/30 bg-white/50 backdrop-blur-md shadow-lg text-gray-900 overflow-hidden">
                <div className="p-5 border-b border-gray-300/20 ">
                    <h3 className="text-xl font-semibold">✨ Premium Plan</h3>
                    <p className="text-sm text-gray-700">Access exclusive features and tools</p>
                </div>

                {/* <div className="h-60 w-full bg-white/40 overflow-hidden border-y border-gray-300/20">
              <img
                src="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg"
                alt="Card visual"
                className="w-full h-full object-cover opacity-90"
              />
            </div> */}

                <div className="p-5 space-y-3">
                    <p className="text-sm text-gray-800 leading-relaxed">
                        Get advanced access to our next-gen tools built for creators and developers.
                        Fast. Secure. Aesthetic. Upgrade your workflow today.
                    </p>
                    <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                        <li>Unlimited API requests</li>
                        <li>Priority support</li>
                        <li>Custom branding</li>
                    </ul>
                </div>

                <div className="px-5 py-4 border-t border-gray-300/20 flex justify-end space-x-3">
                    <button className="px-7 py-1.5 rounded-lg font-semibold backdrop-blur-md shadow-md transition-transform duration-150 ease-in-out transform active:scale-98 bg-gradient-to-r from-gray-200/20 to-gray-400/50 hover:opacity-90 text-gray-900 text-sm">
                        Cancel
                    </button>
                    <button className="px-7 py-1.5 rounded-lg font-semibold backdrop-blur-md shadow-md transition-transform duration-150 ease-in-out transform active:scale-98 bg-gradient-to-r from-blue-400 to-blue-600 hover:opacity-90 text-white text-sm">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </div>

    );
}

export default card
