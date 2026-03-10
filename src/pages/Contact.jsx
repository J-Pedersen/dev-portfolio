import { useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';

const Contact = () => {
  const email = 'obsidiancodedesigns@gmail.com';
  const mailtoHref = `mailto:${email}`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _honey: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    succeeded: false,
    error: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple honeypot check
    if (formData._honey) return;

    setStatus({
      submitting: true,
      succeeded: false,
      error: '',
    });

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/obsidiancodedesigns@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: 'New Portfolio Contact Form Message',
            _captcha: 'false',
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success === 'true') {
        setStatus({
          submitting: false,
          succeeded: true,
          error: '',
        });

        setFormData({
          name: '',
          email: '',
          message: '',
          _honey: '',
        });
      } else {
        setStatus({
          submitting: false,
          succeeded: false,
          error: 'Something went wrong. Please try again in a moment.',
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        succeeded: false,
        error: 'Unable to send your message right now. Please try again later.',
      });
    }
  };

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
        <div
          className="
            rounded-2xl p-4
            border border-slate-300 bg-slate-100
            dark:border-slate-800 dark:bg-slate-900/60
          "
        >
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">
            Send a quick message
          </h2>

          {status.succeeded ? (
            <div
              className="
                rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3
                text-sm text-emerald-800
                dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300
              "
            >
              Thanks — your message was sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-sm">
              {/* Honeypot field */}
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div>
                <label
                  className="block mb-1 text-slate-700 dark:text-slate-200"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
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
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
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
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    w-full rounded-lg px-3 py-2 text-sm outline-none
                    border border-slate-300 bg-white text-slate-900
                    focus:border-brand-soft
                    dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100
                  "
                  placeholder="What would you like to talk about?"
                />
              </div>

              {status.error && (
                <p className="text-xs text-red-600 dark:text-red-400">
                  {status.error}
                </p>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className="btn-primary"
              >
                {status.submitting ? 'Sending...' : 'Send message'}
              </button>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Messages sent here go directly to my inbox.
              </p>
            </form>
          )}
        </div>

        <aside
          className="
            space-y-4 p-4 rounded-2xl text-sm
            border border-slate-300 bg-slate-100 text-slate-700
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