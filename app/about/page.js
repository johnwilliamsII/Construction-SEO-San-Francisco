export const metadata = {
  title: 'About | Construction SEO San Francisco',
  description: 'We are SEO specialists focused exclusively on Bay Area construction companies. Learn why contractors trust us to grow their Google rankings.',
}

export default function AboutPage() {
  return (
    <main style={{ padding: '80px 0', minHeight: '60vh' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-label">About Us</span>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '12px 0 20px' }}>
          SEO Built for Contractors, By People Who Know Construction
        </h1>
        <p style={{ color: 'var(--gray)', maxWidth: '560px', margin: '0 auto 36px', fontSize: '1.05rem' }}>
          Full about page coming soon.
        </p>
        <a href="/#contact" className="btn btn-primary">Work With Us →</a>
      </div>
    </main>
  )
}
