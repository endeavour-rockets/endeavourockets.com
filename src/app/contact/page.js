export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="detail-panel">
        <p className="kicker">Contact</p>
        <h1>Work with Endeavour Rockets</h1>
        <p className="lead">
          This page is ready to connect to a CMS-backed contact form or a Vercel Function that
          forwards sponsor enquiries to the society team.
        </p>

        <form className="contact-form" action="/api/contact" method="post">
          <label>
            Name
            <input name="name" type="text" required />
          </label>

          <label>
            Email
            <input name="email" type="email" required />
          </label>

          <label>
            Organisation
            <input name="organisation" type="text" />
          </label>

          <label>
            Message
            <textarea name="message" rows="6" required />
          </label>

          <button type="submit">Send enquiry</button>
        </form>
      </section>
    </main>
  )
}
