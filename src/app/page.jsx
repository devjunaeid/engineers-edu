import Seminar from "@/components/seminar/Seminar";
import CourseCard from "../components/CourseCard/CourseCard";
import CourseCardList from "../components/CourseCard/CourseCardList";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import FeatureCardList from "../components/FeatureCard/FeatureCardList";
import Hero from "../components/Hero/Hero";
import WhyChooseUs from "@/components/Cards/WhyChooseUs";
import WhyWeAreTheBest from "@/components/Cards/WhyWeAreTheBest";
import { getSeminars } from "@/server/actions/actions";


import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["get-seminars"],
    queryFn: getSeminars,
  })
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="px-4 mt-20 md:mx-20">
        <FeatureCardList />
      </div>
      <div className="px-4  md:mx-20 py-10">
        <h1 className="text-center font-black font-trioBd text-4xl md:text-6xl mb-12">আমাদের কোর্স সমূহ</h1>
          <CourseCardList />
      </div>
      <div className="px-4  md:mx-20 py-10">
      <h1 className="text-center font-black font-trioBd text-4xl md:text-6xl mb-12">সেমিনারের সময়সূচি</h1>
          <HydrationBoundary state={dehydrate(queryClient)}>
          <Seminar />
          </HydrationBoundary>
      </div>
      <div className="px-4  md:mx-20 py-10">
      <h1 className="text-center font-black font-trioBd text-4xl md:text-6xl mb-12">কেন আমাদেরকেই বেছে নিবেন</h1>
        <WhyChooseUs />
      </div>
      <div className="px-4  md:mx-20 py-10">
      <h1 className="text-center font-black font-trioBd text-4xl md:text-6xl mb-12">আমরা কেন সেরা</h1>
        <WhyWeAreTheBest />
      </div>
    </div>
  );
}
