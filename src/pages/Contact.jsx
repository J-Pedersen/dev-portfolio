import PageHeader from '../components/PageHeader.jsx';

const Contact = () => {
  const email = 'obsidiancodedesigns@gmail.com';
  const mailtoHref = `mailto:${email}`;

  return (
    <div className="space-y-8">
      <PageHeader
        kicker="Contact"
        title="Let’s talk about code, projects, or both."
      >
        If you’d like to reach out about a role, a project, or a question
        about any of the work here, these are the easiest ways to get in
        touch.
      </PageHeader>

      <section className="grid gap-6 md:grid-cols-[1.3fr,1fr] items-start">

        {/* Contact form */}
        <div
          className="
            rounded-2xl p-4
            border border-slate-300 bg-white
            dark:border-slate-800 dark:bg-slate-900/60
          "
        >
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
            Send a quick message
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailtoHref;
            }}
            className="space-y-3 text-sm"
          >
            <div>
              <label
                className="block mb-1 text-slate-700 dark:text-slate-200"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="
                  w-full rounded-lg px-3 py-2 text-sm outline-none
                  border border-slate-300 bg-white text-slate-900
                  focus:border-brand-soft
                  dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100
                "
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                className="block mb-1 text-slate-700 dark:text-slate-200"
                htmlFor="fromEmail"
              >
                Email
              </label>
              <input
                id="fromEmail"
                type="email"
                className="
                  w-full rounded-lg px-3 py-2 text-sm outline-none
                  border border-slate-300 bg-white text-slate-900
                  focus:border-brand-soft
                  dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100
                "
                placeholder="you@domain.com"
              />
            </div>

            <div>
              <label
                className="block mb-1 text-slate-700 dark:text-slate-200"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="
                  w-full rounded-lg px-3 py-2 text-sm outline-none
                  border border-slate-300 bg-white text-slate-900
                  focus:border-brand-soft
                  dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100
                "
                placeholder="What would you like to talk about?"
              />
            </div>

            <button
              type="submit"
              className="
                inline-flex items-center rounded-full bg-brand px-5 py-2
                text-sm font-medium text-white shadow-lg shadow-brand/30
                hover:bg-brand-soft transition
              "
            >
              Open email client
            </button>

            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Submitting will open your default email client with a new message.
              For now, this form is front-end only.
            </p>
          </form>
        </div>

        {/* Direct contact info */}
        <aside
          className="
            space-y-4 p-4 rounded-2xl text-sm
            border border-slate-300 bg-white text-slate-700
            dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300
          "
        >
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
            Direct links
          </h2>

          <div className="space-y-2">
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
              <a
                href={mailtoHref}
                className="text-sm text-brand hover:text-brand-soft break-all"
              >
                {email}
              </a>
            </div>

            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">GitHub</p>
              <a
                href="https://github.com/J-Pedersen"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-brand hover:text-brand-soft"
              >
                github.com/J-Pedersen
              </a>
            </div>

            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/jeff-pedersen-626b4a23a/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-brand hover:text-brand-soft"
              >
                linkedin.com/in/jeff-pedersen-626b4a23a/
              </a>
            </div>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400">
            Feel free to reach out even if you’re just curious about how a
            specific project was built. I’m always open to trading notes on
            code, architecture, and project planning.
          </p>
        </aside>
      </section>
    </div>
  );
};

export default Contact;