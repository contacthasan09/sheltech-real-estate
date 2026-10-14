import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <section className="min-h-screen bg-graySoft flex items-center justify-center px-5 py-24">
      <div className="w-full max-w-md bg-white p-10 shadow-soft">
        <h1 className="text-[15px] font-medium text-ink mb-2">User Sign in</h1>
        <p className="text-[12px] text-ink/50 mb-8">Access your Sheltech account</p>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input className="input-line" type="email" placeholder="Email" required />
          <input className="input-line" type="password" placeholder="Password" required />
          <button
            type="submit"
            className="w-full bg-ink text-mist py-3 text-[15px] font-medium hover:bg-inkSoft transition-colors"
          >
            Sign in
          </button>
        </form>
        <p className="text-[12px] text-ink/50 mt-6 text-center">
          <Link to="/" className="hover:text-ink">
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  )
}
