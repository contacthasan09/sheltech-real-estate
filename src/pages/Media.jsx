import { NEWS } from '../data/projects'

const BANNER = 'https://www.sheltech-bd.com/cms/admin/uploads/page/media-center/1707387404TvLlQ.jpg'

export default function Media() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <h1>A peek behind the scenes of Sheltech</h1>
      </section>

      <section className="py-16 bg-mist">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS.map((n) => (
              <article key={n.title} className="group">
                <div className="aspect-[16/10] overflow-hidden mb-3">
                  <img
                    src={n.img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-[12px] text-ink/50 uppercase mb-1">{n.date}</p>
                <h3 className="text-[15px] font-medium text-ink">{n.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-inkSoft py-16 text-center text-mist">
        <div className="container-max max-w-lg mx-auto">
          <h2 className="heading-display text-[clamp(24px,3vw,36px)] uppercase mb-4">
            Subscribe to Our Newsletter
          </h2>
          <form
            className="flex flex-col sm:flex-row gap-3 mt-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Your email" className="input-pill flex-1" />
            <button type="submit" className="btn-outline-light px-6 py-3 border border-mist/40 rounded-pill">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
