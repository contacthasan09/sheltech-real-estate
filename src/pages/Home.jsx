import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

const HERO = 'https://www.sheltech-bd.com/cms/admin/uploads/page/home/17781462106UdkO.jpg'
const COMMERCIAL = 'https://www.sheltech-bd.com/cms/admin/uploads/page/home/1755057781B34VR.jpg'
const PROJECT_BG = 'https://www.sheltech-bd.com/cms/admin/uploads/page/home/1744785421SHuDA.jpg'
const LEGACY = 'https://www.sheltech-bd.com/cms/admin/uploads/page/home/1759832977eTqSw.jpg'
const INSPIRE = 'https://www.sheltech-bd.com/cms/admin/uploads/page/home/1744786091jYgyp.jpg'
const INSIGHT = 'https://www.sheltech-bd.com/cms/admin/uploads/page/home/1744785324Q7WdT.jpg'

const featured = [...PROJECTS.residential.slice(0, 2), ...PROJECTS.commercial.slice(0, 2)]

export default function Home() {
  return (
    <>
      {/* Hero — Living */}
      <section className="relative h-screen min-h-[560px] bg-black">
        <img src={HERO} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 container-max">
          <p className="text-mist/70 text-[15px] mb-2 tracking-wide">Living</p>
          <h1 className="heading-display text-[clamp(48px,10vw,90px)] text-white/75 leading-none max-w-3xl">
            Crafting Spaces
          </h1>
          <Link to="/projects" className="btn-outline-light mt-8 inline-block w-fit">
            Explore Projects
          </Link>
        </div>
      </section>

      {/* Commercial landmark */}
      <section className="relative py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
          <div className="relative min-h-[320px]">
            <img src={COMMERCIAL} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="bg-inkSoft flex flex-col justify-center px-8 md:px-16 py-16 text-mist">
            <h2 className="heading-display text-[clamp(28px,4vw,44px)] uppercase mb-4">
              The Next Big Commercial Landmark
            </h2>
            <p className="text-[15px] text-mist/70 leading-relaxed mb-8 max-w-md">
              Premium commercial developments designed for growth, visibility, and lasting value.
            </p>
            <Link to="/projects/commercial" className="btn-outline-light w-fit">
              View Commercial
            </Link>
          </div>
        </div>
      </section>

      {/* Landmark projects */}
      <section className="bg-inkSoft py-[80px] md:py-[120px]">
        <div className="container-max">
          <h2 className="heading-display text-[clamp(28px,4vw,44px)] text-mist uppercase text-center mb-12">
            Explore Our Landmark Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <Link key={p.name} to="/projects" className="group block">
                <div className="aspect-[3/4] overflow-hidden mb-3">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-mist text-[15px] font-medium">{p.name}</p>
                <p className="text-mist/50 text-[12px] uppercase tracking-wider">{p.type}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-outline-light">
              All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="bg-graySoft py-[100px]">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">An Inherent Legacy of Excellence</h2>
            <p className="text-[15px] text-ink/70 leading-relaxed mb-8">
              For decades Sheltech has shaped Dhaka’s skyline with trusted residential and commercial
              developments — quality construction, thoughtful design, and lasting relationships.
            </p>
            <Link to="/about" className="text-ink font-medium border-b border-ink pb-0.5 hover:opacity-70 transition-opacity">
              About Sheltech
            </Link>
          </div>
          <img src={LEGACY} alt="" className="w-full aspect-[4/3] object-cover shadow-soft" />
        </div>
      </section>

      {/* Glimpse */}
      <section className="bg-graySoft pb-[100px]">
        <div className="container-max">
          <h2 className="section-title text-center mb-10">Glimpse of Inspiration</h2>
          <img src={INSPIRE} alt="" className="w-full max-h-[480px] object-cover shadow-soft" />
        </div>
      </section>

      {/* Insights */}
      <section className="bg-graySoft pb-[100px]">
        <div className="container-max">
          <h2 className="section-title text-center mb-10">Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src={INSIGHT} alt="" className="w-full aspect-[16/10] object-cover" />
            <div>
              <p className="text-[15px] text-ink/70 leading-relaxed mb-6">
                Stay informed with project updates, market perspectives, and stories from the Sheltech community.
              </p>
              <Link to="/media" className="text-ink font-medium border-b border-ink pb-0.5">
                Media Center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
