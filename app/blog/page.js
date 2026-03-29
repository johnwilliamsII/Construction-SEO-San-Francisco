export const metadata = {
  title: 'Construction SEO Blog | Bay Area Contractor Marketing Tips',
  description: 'Actionable SEO tips, local search strategies, and Google Business Profile guides for Bay Area construction companies and contractors.',
}

export default function BlogPage() {
  return (
    <main style={{ padding: '80px 0', minHeight: '60vh' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-label">Blog</span>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '12px 0 20px' }}>
          Construction SEO Insights
        </h1>
        <p style={{ color: 'var(--gray)', maxWidth: '560px', margin: '0 auto 36px', fontSize: '1.05rem' }}>
          In-depth guides, local search tips, and GBP strategies for Bay Area contractors. First articles coming soon.
        </p>
        <a href="/#contact" className="btn btn-primary">Get Notified When We Launch →</a>
      </div>
    </main>
  )
}
