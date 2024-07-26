
import './App.css'
import OtpForm from './components/OtpForm'

function App() {

  return (
    <main className='h-screen bg-[#3d72af] flex flex-col items-center gap-10'>
    <div className=' flex flex-col gap-4 justify-center items-center'>
      <p className='text-white text-[50px] font-bold'>Chai aur Code</p>
      <OtpForm/>
    </div>
    <div className='rounded-lg self-end'>
      <a href="https://chaicode.com/" target='_blank' rel="noreferrer noopener"><img src="./src/assets/image.png" alt="Chai aur Code" className='rounded-lg h-28 w-32 pr-10'/></a>
    </div>
    </main>
  )
}

export default App

