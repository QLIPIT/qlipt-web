import ExclusiveCard from "@/components/ExclusiveCard";
import Hero from "@/components/Hero";
import TopCard from "@/components/TopCard";
import FrontLayout from "@/layout/FrontLayout";
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import Card from "@/components/Card";
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <FrontLayout>
        <Hero />
        <main className="lg:px-32 p-6">
          <section className="lg:py-12">
            <div className="text-center">
              <h1 className="heading my-3 lg:text-4xl text-2xl font-bold">Exclusive QLIP NFTs</h1>
              <p className="lg:text-sm text-xs">Afrian is home to a large variety of races, some native to its lands and some hailing from other realms. </p>
            </div>
            <div className="flex flex-wrap justify-between my-10">
              <ExclusiveCard />
              <ExclusiveCard />
              <ExclusiveCard />
            </div>
          </section>
          <section className="lg:py-12">
            <div>
              <h1 className="heading lg:text-4xl text-2xl font-bold py-6">Top Sellers</h1>
              <select className="lg:w-44 w-[80%] p-3 rounded-md bg-transparent border border-[#353945]">
                <option value="today">Today</option>
              </select>
            </div>
            <div className="my-5">
              <OwlCarousel responsive={
                {
                  0: {
                    items: 1,
                    loop: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    stagePadding: 50,
                    autoplayTimeout: 2000,
                    margin: 20,
                  },
                  800: {
                    items: 2,
                    loop: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    stagePadding: 50,
                    autoplayTimeout: 2000,
                    margin: 20,
                  },
                  1000: {
                    items: 5,
                    loop: true,
                    margin: 20,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    stagePadding: 50,
                    autoplayTimeout: 2000,
                  }
                }
              }>
                <TopCard />
                <TopCard />
                <TopCard />
                <TopCard />
                <TopCard />

              </OwlCarousel>
            </div>
          </section>
          <section className="lg:py-12">
            <div className="lg:flex justify-between">
              <h1 className="heading lg:text-4xl text-2xl font-bold">Marketplace</h1>
              <div className="relative lg:w-[80%] sm:my-6">
                <input type="text" className="p-3 pl-10 border border-[#16161E] rounded-md bg-transparent color-[#16161E] w-full" placeholder="Search for items, collections and account" />
                <img src="/assets/Shape.png" className="absolute top-4 left-3" alt="" />
              </div>
            </div>
            <div className="flex justify-between lg:py-10 flex-wrap">
              <Card />
              <Card />
              <Card />
              <Card />

            </div>
            <div className="text-center my-10">
              <button className="w-52 p-4 rounded-full px-10 border border-[#5328DE]">Load More</button>
            </div>
          </section>
        </main>
      </FrontLayout>
    </div>
  )
}
