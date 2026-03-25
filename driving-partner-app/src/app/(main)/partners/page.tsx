export default function PartnersPage() {
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold">Driving Partners</h1>
            <p className="mt-4 text-lg">
                Connect with experienced drivers in Sydney who can supervise your practice sessions. Browse profiles, read reviews, and find the perfect partner to help you gain confidence behind the wheel.
            </p>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Available Partners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example partner card */}
                    <div className="border rounded-lg p-4 shadow-sm">
                        <h3 className="text-xl font-bold">John Doe</h3>
                        <p className="text-gray-600">5 years of experience | 4.9 stars (120 reviews)</p>
                        <p className="mt-2">Available for sessions on weekdays and weekends. Located in Sydney CBD.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View Profile</button>
                    </div>
                    {/* More partner cards would go here */}
                </div>
            </div>
        </main>
    )
}