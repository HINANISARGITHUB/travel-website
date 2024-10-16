import {Header} from './components/header';
import Hero from './components/hero';
import Category from './components/category';
import Destination from './components/destination';
import Booking from './components/booking';
import Subscribe from './components/subscribe';
import Footer from './components/footer';

export default function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <Category /> 
        <Destination />
        <Booking />
        <Subscribe />
        <Footer />
    </div>
   
  );
}
 