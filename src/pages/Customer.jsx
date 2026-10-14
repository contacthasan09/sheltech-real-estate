const BANNER = 'https://www.sheltech-bd.com/cms/admin/uploads/page/customer-inquiry/1707390813TPeXI.jpg'

export default function Customer() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <h1>Customer Inquiry</h1>
      </section>

      <section className="py-20 bg-mist">
        <div className="container-max max-w-xl mx-auto">
          <h2 className="text-[15px] font-medium text-ink mb-8 text-center">
            We’d love to hear from you
          </h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input className="input-line" placeholder="Full name" required />
            <input className="input-line" type="email" placeholder="Email" required />
            <input className="input-line" type="tel" placeholder="Phone" />
            <input className="input-line" placeholder="Project of interest" />
            <textarea className="input-line min-h-[120px] resize-y" placeholder="Your message" />
            <button
              type="submit"
              className="w-full text-center text-inkSoft font-medium border border-inkSoft py-3 hover:bg-inkSoft hover:text-white transition-colors duration-300"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
