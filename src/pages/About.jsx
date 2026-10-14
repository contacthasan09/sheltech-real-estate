import { Link } from 'react-router-dom'

const BANNER = 'https://www.sheltech-bd.com/cms/admin/uploads/page/about-us/1709632463jXYoz.jpg'
const IMG1 = 'https://www.sheltech-bd.com/cms/admin/uploads/page/about-us/1707390568PpFJs.jpg'
const IMG2 = 'https://www.sheltech-bd.com/cms/admin/uploads/page/about-us/1709631324hiYG9.jpg'
const IMG3 = 'https://www.sheltech-bd.com/cms/admin/uploads/page/about-us/1709631388NzQE1.jpg'

export default function About() {
  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNER})` }}>
        <h1>a legacy of excellence</h1>
      </section>

      <section className="py-[80px] bg-mist">
        <div className="container-max max-w-3xl text-center">
          <h2 className="section-title mb-6">A Legacy Written in Concrete</h2>
          <p className="text-[15px] text-ink/70 leading-relaxed">
            Sheltech has been a trusted name in Bangladesh real estate for decades — delivering
            quality homes and commercial spaces with integrity, innovation, and care for every client.
          </p>
        </div>
      </section>

      <section className="bg-inkSoft py-20 text-mist text-center">
        <div className="container-max">
          <p className="heading-display text-[clamp(36px,6vw,60px)] uppercase mb-4">37+ Years</p>
          <p className="text-[15px] text-mist/70">of excellence in real estate development</p>
        </div>
      </section>

      <section className="py-20 bg-mist">
        <div className="container-max">
          <h2 className="section-title text-center mb-12">The Essence of Our Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[IMG1, IMG2, IMG3].map((src, i) => (
              <img key={i} src={src} alt="" className="w-full aspect-[4/3] object-cover shadow-soft" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-graySoft text-center">
        <div className="container-max">
          <h2 className="section-title mb-6">Facilitating Positive Changes Through CSR</h2>
          <p className="text-[15px] text-ink/70 max-w-xl mx-auto mb-8">
            Community initiatives and social responsibility remain central to how we build and grow.
          </p>
          <Link to="/media" className="text-ink border-b border-ink font-medium">
            Learn more
          </Link>
        </div>
      </section>
    </>
  )
}
