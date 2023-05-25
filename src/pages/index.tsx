import ExclusiveCard from "@/components/ExclusiveCard";
import Hero from "@/components/Hero";
import TopCard from "@/components/TopCard";
import FrontLayout from "@/layout/FrontLayout";

export default function Home() {
  return (
    <div>
      <FrontLayout>
        <Hero />
        <main className="px-32">
          <section className="py-12">
            <div className="text-center">
              <h1 className="heading my-3 text-4xl font-bold">Exclusive QLIP NFTs</h1>
              <p>Afrian is home to a large variety of races, some native to its lands and some hailing from other realms. </p>
            </div>
            <div className="flex justify-between my-10">
              <ExclusiveCard />
              <ExclusiveCard />
              <ExclusiveCard />
            </div>
          </section>
          <section className="py-12">
            <div>
              <h1 className="heading text-4xl font-bold py-6">Top Sellers</h1>
              <select className="w-44 p-3 rounded-md bg-transparent border border-[#353945]">
                <option value="today">Today</option>
              </select>
            </div>
            <div className="my-5">
              <TopCard />
            </div>
          </section>
        </main>
      </FrontLayout>
    </div>
  )
}
