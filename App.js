import './App.css';
import bulletin from './bulletin.png';

export default function App() {
  return (
  <div className='App text-white flex flex-col basis-80 m-20 '>
    

      <div className='font-Michroma  xl:text-7xl md:text-6xl  flex justify-center pl-20 pr-20 pt-14 pb-40 '>
        <span className=''>SCHE</span><span className='text-sky-500 '>DULE</span>
      </div>


      <div className='body flex flex-col'>


          <div className='day1 flex flex-col'>

              <div className='dayhead font-Changa text-6xl text-slate-200 underline underline-offset-4 font-thin pr-72 pb-16'>
                Day - 1
              </div>

              <div className='day1body flex'>

              <div className='day2body flex'>
                    <div className='bullentins flex flex-col '>
                      <div className='flex self-center justify-center py-14 pl-96'>
                        <div className='mr-10'><img src={bulletin} alt='bulletin' className='h-9 animate-spin hover:animate-spin delay-150'/></div>
                        <div className='hover:text-lg duration-200 delay-100'>This place is for content</div>
                      </div>
                      <div className='flex justify-center  py-14 pl-96'>
                        <div className='mr-10'><img src={bulletin} alt="bulletin" className='h-9 animate-spin hover:animate-spin'/></div>
                        <div className='hover:text-lg duration-200 delay-100'>This place is for content</div>
                      </div>
                      <div className='flex self-center py-14 pl-96'>
                        <div className='mr-10'><img src={bulletin} alt="bulletin" className='h-9 animate-spin hover:animate-spin'/></div>
                        <div className='hover:text-lg duration-200 delay-100'>This place is for content</div>
                      </div>
                    
                    
                    
                    </div>
              </div>

          

              </div>

          </div>


          <div className='day2 flex flex-col'>

              <div className='dayhead font-Changa text-6xl text-slate-200 underline underline-offset-4 font-thin pr-72 pb-16 mt-16'>
                Day - 2
              </div>

              <div className='day2body flex'>
                    <div className='bullentins flex flex-col '>
                      <div className='flex self-center justify-center py-14 pl-96'>
                        <div className='mr-10'><img src={bulletin} alt='bulletin' className='h-9 animate-spin w-9 hover:animate-bounce duration-200 delay-150'/></div>
                        <div className='hover:text-lg duration-200 delay-100'>This place is for content</div>
                      </div>
                      <div className='flex justify-center py-14 pl-96 '>
                        <div className='mr-10'><img src={bulletin} alt="bulletin" className='h-9 animate-spin hover:animate-spin'/></div>
                        <div className='hover:text-lg duration-200 delay-100'>This place is for content</div>
                      </div>
                      <div className='flex self-center py-14 pl-96'>
                        <div className='mr-10'><img src={bulletin} alt="bulletin" className='h-9 animate-spin hover:animate-spin'/></div>
                        <div className='hover:text-lg duration-200 delay-100'>This place is for content</div>
                      </div>
                    
                    
                    
                    </div>
              </div>
          </div>


      </div>

      


  </div>
  )
}
