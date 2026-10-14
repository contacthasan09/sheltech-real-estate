const BANNER = 'https://www.sheltech-bd.com/cms/admin/uploads/page/landowner/1733655333TrO4s.jpg'
const IMG = 'https://www.sheltech-bd.com/cms/admin/uploads/page/landowner/1707388324d2MjS.jpg'

export default function Landowner() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <h1>Unite with us in pursuit of Excellence</h1>
      </section>

      <section className="py-20 bg-mist">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">The essence of our Excellence</h2>
            <p className="text-[15px] text-ink/70 leading-relaxed mb-6">
              Own land in Dhaka? Partner with Sheltech for joint venture real estate projects.
              Maximize your land’s value with a trusted developer known for quality delivery and
              transparent collaboration.
            </p>
            <p className="text-[15px] text-inkSoft font-medium">Start Your Joint Venture Today</p>
          </div>
          <img src={IMG} alt="" className="w-full aspect-[4/3] object-cover shadow-soft" />
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="container-max max-w-xl mx-auto">
          <h2 className="section-title text-center mb-8">Get in Touch</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input className="input-line" placeholder="Full name" />
            <input className="input-line" type="email" placeholder="Email" />
            <input className="input-line" type="tel" placeholder="Phone" />
            <textarea className="input-line min-h-[100px] resize-y" placeholder="Land details / message" />
            <button type="submit" className="text-inkSoft font-medium border-b border-inkSoft pb-0.5">
              Submit inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 bg-graySoft text-center">
        <div className="container-max">
          <h2 className="section-title mb-4">Testimonial</h2>
          <p className="text-[15px] text-ink/70 max-w-lg mx-auto italic">
            “Working with Sheltech on our joint venture was professional, transparent, and rewarding.”
          </p>
        </div>
      </section>
    </>
  )
}
