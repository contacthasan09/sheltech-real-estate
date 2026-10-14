const BANNER = 'https://www.sheltech-bd.com/cms/admin/uploads/page/team/1707643167IpyU1.jpg'
const TEAM = [
  {
    name: 'Late Dr. Toufiq M. Seraj',
    role: 'Founder (1956–2019)',
    img: 'https://www.sheltech-bd.com/cms/admin/uploads/page/about-us/1695621042m9c58.jpg',
  },
  {
    name: 'Leadership',
    role: 'Management Team',
    img: 'https://www.sheltech-bd.com/cms/admin/uploads/page/team/1768823212KsIi1.jpg',
  },
  {
    name: 'Executive',
    role: 'Board & Directors',
    img: 'https://www.sheltech-bd.com/cms/admin/uploads/page/team/1768823251WFeJt.jpg',
  },
  {
    name: 'Operations',
    role: 'Senior Management',
    img: 'https://www.sheltech-bd.com/cms/admin/uploads/page/team/1784961741szcik.jpg',
  },
]

export default function Leaders() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <h1>THE LEADERS OF SHELTECH</h1>
      </section>

      <section className="py-20 bg-graySoft">
        <div className="container-max">
          <h2 className="section-title text-center mb-4">The Leaders of Sheltech</h2>
          <p className="text-center text-[15px] text-ink/60 mb-12 max-w-xl mx-auto">
            Guided by vision, integrity, and a commitment to excellence across every project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((m) => (
              <article key={m.name} className="text-center">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full aspect-square object-cover mb-4 shadow-soft"
                />
                <h3 className="text-[15px] font-bold text-ink">{m.name}</h3>
                <p className="text-[12px] text-ink/50 uppercase tracking-wide">{m.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-graySoft border-t border-ink/5">
        <div className="container-max text-center">
          <h2 className="section-title mb-4">Recognitions</h2>
          <p className="text-[15px] text-ink/60">
            Industry awards and acknowledgements for quality and contribution to the sector.
          </p>
        </div>
      </section>
    </>
  )
}
