
// Components
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default function Spa() {
  return (

   <div>
    <Navbar/>
   <div className="font-semibold italic">
       <h1>hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid quisquam vitae saepe eveniet enim totam deserunt dolorem perspiciatis quam laborum iusto ipsam culpa consectetur, sequi, impedit minus provident harum.</h1>
   </div>
    <Footer/>
  </div>
  )
}
