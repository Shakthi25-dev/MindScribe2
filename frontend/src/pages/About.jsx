const About = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-10 my-10">
      <div className="w-full max-w-3xl bg-base-200 shadow-xl hover:shadow-2xl rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-7">About MindScribe</h1>

        <p className="text-lg text-center mb-4">
          MindScribe is a modern digital notes and journaling platform designed
          to help you capture your thoughts, ideas, and memories in one secure
          place. Built with simplicity and privacy in mind, MindScribe allows
          users to write, organize, and revisit their personal entries anytime.
        </p>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">What You Can Do</h2>

        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>📝</span>
            <span>
              <strong>Create & Manage Notes:</strong> Easily add, edit, and
              delete your personal notes and journal entries.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span>📅</span>
            <span>
              <strong>Organize by Date:</strong> Keep track of your thoughts and
              experiences with structured entries.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span>🔍</span>
            <span>
              <strong>Search Your Notes:</strong> Quickly find past entries
              using the built-in search functionality.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span>🔒</span>
            <span>
              <strong>Secure Authentication:</strong> Your account and notes are
              protected using encrypted authentication and secure cookies.
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">Tech Stack</h2>

        <p className="text-lg text-center mb-4">
          MindScribe is built with modern technologies to ensure a fast,
          secure, and smooth experience.
        </p>

        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>⚛️</span>
            <span>
              <strong>Frontend:</strong> React.js with TailwindCSS & DaisyUI
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span>🖥️</span>
            <span>
              <strong>Backend:</strong> Node.js with Express.js
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span>🔑</span>
            <span>
              <strong>Authentication:</strong> JWT with secure HTTP cookies
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span>📡</span>
            <span>
              <strong>State Management:</strong> Redux Toolkit & RTK Query
            </span>
          </li>

          <li className="flex items-start gap-2">
            <span>🗄️</span>
            <span>
              <strong>Database:</strong> MongoDB
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <p className="text-lg text-center">
          Start organizing your thoughts with <strong>MindScribe</strong> — a
          simple, secure, and powerful place for your ideas and memories.
        </p>
      </div>
    </div>
  );
};

export default About;