import logo from '../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";




 

const Header = () => {
    return (
        <div className='flex flex-col text-center space-y-4 mt-10 lg:max-w-5xl mx-auto'>
          <img className='mx-auto ' src={logo} alt="" />
          <p>Journalism Without Fear or Favour</p>
          <div className='text-center text-3xl font-bold'>
           <span> {moment().format('MMMM Do YYYY, h:mm a')}</span>
          </div>
          <div className='flex'>
            <button className=' btn bg-red-600 text-white'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
  I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text.
</Marquee>
          </div>
        </div>
    );
};
moment().format();
export default Header;