import Banner from '@/Components/Banner/Banner';
import Comments from '@/Components/Comments/Comments';
import Famous from '@/Components/Famous/Famous';
import Footer from '@/Components/Footer/Footer';
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
      <Comments />
      <Footer />
    </main>
  );
}
