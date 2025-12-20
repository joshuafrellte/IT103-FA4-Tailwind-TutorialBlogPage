import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav className="text-white flex justify-around bg-blue-950 pt-5 pb-5 shadow-md">
          <h1 className="font-bold">Tailwind CSS</h1>
          <ul className='flex gap-4'>
            <li><a href="#setup">Setup</a></li>
            <li><a href="#utility">Utility</a></li>
            <li><a href="#layout">Layout</a></li>
            <li><a href="#responsive">Responsive</a></li>
          </ul>
        </nav>
        <section className="text-center bg-blue-300 pt-16 pb-16">
          <h1 className="text-5xl font-bold pt-5 pb-5">Get Started with Tailwind</h1>
          <p>A utility-first CSS framework</p>
          <p>Style directly in your HTML/JSX</p>
        </section>
      </header>

      <main className="bg-blue-200">
        <section>
          <h2 id="setup" className="text-3xl">Setup</h2>
          <p>First, have NodeJS installed.</p>
        </section>

        <section>
          <h2 id="utility" className="text-3xl">Utility Classes</h2>
          <p>One class = One style</p>
          <p>Multiple classes componse a design</p>
        </section>

        <section>
          <h2 id="layout" className="text-3xl">Layout</h2>
          <h3 className="text-xl">Flex</h3>
          <h3 className="text-xl">Grid</h3>
        </section>

        <section>
          <h2 id="responsive" className="text-3xl">Responsive Design</h2>

        </section>

        <section>
          <h2 id="" className="text-3xl">Wrapping Up</h2>

        </section>
      </main>

      <footer className="bg-blue-300 text-center pt-5 pb-5">
        Copyright &copy; {new Date().getFullYear()} Joshua Frell Te
      </footer>
    </>
  );
}
