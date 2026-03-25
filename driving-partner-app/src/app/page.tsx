import Navbar from './components/Navbar';

export default function HomePage() {

  return (
    <div>
      <Navbar />
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">
          Find a driving partner in Sydney
        </h1>
        <p className="text-lg">
          Affordable supervised driving practice for learners who already know the basics.
        </p>
        <div>
          <h2 className="text-2xl font-semibold mt-8 mb-4">How it works</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Sign up:</strong> Create an account and set up your profile.
            </li>
            <li>
              <strong>Find a partner:</strong> Browse profiles of experienced drivers in Sydney who can supervise your practice sessions.
            </li>
            <li>
              <strong>Schedule sessions:</strong> Coordinate with your chosen partner to schedule practice sessions at convenient times.
            </li>
            <li>
              <strong>Practice driving:</strong> Meet your partner and practice driving under their supervision to gain confidence and experience.
            </li>
          </ol>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Why choose us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Experienced partners: Our partners are vetted and have a proven track record of providing safe and effective supervision.</li>
            <li>Flexible scheduling: Coordinate sessions that fit your schedule and availability.</li>
            <li>Affordable rates: We offer competitive pricing for our services, making it accessible for learners on a budget.</li>
            <li>Convenient location: Our partners are located throughout Sydney, making it easy to find someone nearby.</li>
          </ul>
        </div>
      </main>
    </div>
  )
}