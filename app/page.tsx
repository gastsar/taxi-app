import CarOptions from "./components/CarOptions";
import OptionsBuy from "./components/OptionsBuy";
import SearchForm from "./components/SearchForm";

import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  if (userId) {
    // Query DB for user specific information or display assets only to signed in users
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  // Use `user` to render user details or create UI elements
  return (
    <main className="flex flex-row gap-4 m-2 h-[90vh]">
      <section className="w-1/3 border p-3 border-slate-700/20 rounded-md">
        <SearchForm />
        <CarOptions />
        <OptionsBuy />
      </section>
      <section className="f w-2/3 border p-3 border-slate-700/20 rounded-md ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92457.01789378011!2d1.3504425171444356!3d43.60067365945568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sfr!2sfr!4v1717454874026!5m2!1sfr!2sfr"
          className="w-full h-full rounded-md"
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
