import Link from 'next/link'

const sections = [
  {
    title: 'Staff',
    description: 'Introduce the committee, technical leads, and wider society team.'
  },
  {
    title: 'Projects',
    description: 'Highlight active rocket work, milestones, test campaigns, and outcomes.'
  },
  {
    title: 'Sponsors',
    description: 'Showcase partner organisations, support tiers, and collaboration impact.'
  },
  {
    title: 'Socials and posts',
    description: 'Surface news, blog entries, and social content as the public activity feed.'
  }
]

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <p className="kicker">University Society</p>
        <h1>Endeavour Rockets</h1>
        <p className="lead">
          A Vercel-ready website for presenting the society, its staff, its engineering work,
          and the organisations that support it.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="primary-link">
            Sponsor contact
          </Link>
          <a href="#sections" className="secondary-link">
            Explore sections
          </a>
        </div>
      </section>

      <section id="sections" className="content-grid" aria-label="Site sections">
        {sections.map((section) => (
          <article key={section.title} className="content-card">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
