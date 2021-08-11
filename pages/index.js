import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Solar System</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a className="text-blue-600">Solar System!</a>
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/planetGenerator/planetGenerator">
            <a className="p-6 mt-6 text-left border w-106 rounded-xl hover:text-blue-600 focus:text-green-600">
              <h3 className="text-2xl font-bold">
                Lets Go To Discover Planets &rarr;
              </h3>
              <p className="mt-4 text-xl">
                You can write the planet names and see their pictures ...
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p> Powered by enzyme</p>
      </footer>
    </div>
  );
}
