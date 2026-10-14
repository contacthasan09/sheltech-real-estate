import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

const BANNERS = {
  residential: 'https://www.sheltech-bd.com/cms/admin/uploads/page/projects/1706162099ULACL.jpg',
  commercial: 'https://www.sheltech-bd.com/cms/admin/uploads/page/projects/17326195293SCf9.jpeg',
  sapphire: 'https://www.sheltech-bd.com/cms/admin/uploads/page/projects/1733386391Bcq4V.jpg',
  all: 'https://www.sheltech-bd.com/cms/admin/uploads/page/projects/1706162099ULACL.jpg',
}

const TITLES = {
  residential: 'Crafting Your Dream Home',
  commercial: 'Boost Your Business Right Here',
  sapphire: 'Crafting Your Dream Home',
  all: 'Crafting Your Dream Home',
}

export default function Projects() {
  const { type } = useParams()
  const key = type === 'commercial' || type === 'sapphire' || type === 'residential' ? type : 'all'

  const list = useMemo(() => {
    if (key === 'residential') return PROJECTS.residential
    if (key === 'commercial') return PROJECTS.commercial
    if (key === 'sapphire') return PROJECTS.sapphire
    return [...PROJECTS.residential, ...PROJECTS.commercial]
  }, [key])

  return (
    <>
      <section className="page-hero" style={{ backgroundImage: `url(${BANNERS[key]})` }}>
        <h1>{TITLES[key]}</h1>
      </section>

      <section className="py-16 bg-mist">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { to: '/projects', label: 'All', id: 'all' },
              { to: '/projects/residential', label: 'Residential', id: 'residential' },
              { to: '/projects/commercial', label: 'Commercial', id: 'commercial' },
              { to: '/projects/sapphire', label: 'Sapphire Series', id: 'sapphire' },
            ].map((tab) => (
              <Link
                key={tab.id}
                to={tab.to}
                className={`text-[15px] font-medium transition-colors duration-300 ${
                  key === tab.id ? 'text-ink border-b-2 border-ink' : 'text-ink/50 hover:text-ink'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((p) => (
              <article key={p.name + p.type} className="group">
                <div className="aspect-[4/5] overflow-hidden mb-3 bg-graySoft">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[15px] font-medium text-ink">{p.name}</h3>
                <p className="text-[12px] uppercase tracking-wider text-ink/50">{p.type}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
