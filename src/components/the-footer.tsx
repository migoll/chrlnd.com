// Next.js tror åbenbart at onClick på min alert længere nede i et component er et "server component", så use client gør at den del er et Client Component
"use client";

export function TheFooter() {
  return (
    <div className="p-8 font-medium border-t border-neutral-950 border-opacity-10 dark:border-white dark:border-opacity-[12%]">
      <nav className="w-full max-w-screen-sm mx-auto flex justify-between items-center flex-col custom-sm:flex-row">
        <div className="link">
          <a href="/">
            <p className="text-xl hover:text-neutral-600">christian lund</p>
          </a>
        </div>
        <div className="navbar flex items-center flex-col custom-sm:flex-row custom-sm:space-x-8">
          <a href="mailto:chris.lund02@gmail.com">
            <p className="text-xl hover:text-neutral-600">
              chris.lund02@gmail.com
            </p>
          </a>
          <p className="text-xl hover:text-neutral-600">+45 42415990</p>
        </div>
      </nav>
    </div>
  );
}
