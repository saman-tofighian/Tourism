import Banner from '@/Components/Banner/Banner';
import Famous from '@/Components/Famous/Famous';
import Header from '@/Components/Header/Header';
import Motto from '@/Components/Motto/Motto';
import Sell from '@/Components/Sell/Sell';
import WhyTravel from '@/Components/WhyTravel/WhyTravel';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden'>
      <Header />
      <Motto />
      <Famous />
      <WhyTravel />
      <Sell />
      <Banner />
    </main>
  );
}
