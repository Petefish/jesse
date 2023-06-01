import './App.css';

function App() {
  return (
    <div id="container" className="container mx-auto">
      <header id="header" className='mt-3'>
        <div className="rounded-lg overflow-hidden shadow-lg bg-white flex justify-center">
          <img src='rosewin_allcolors_300_75.png' alt='banner' />
        </div>
      </header>
      <div id="content" className='mt-3'>
        <div className='text-center text-white text-lg'>
          Home | Blog | Shop | Contact
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-white text-center p-3 mt-3 flex flex-col gap-3">
          <p className='text-xl'>Software Engineering & Infrastructure. For coin.</p>
          <p>Whether you're looking for additional manpower to support an existing development project or require a start-to-finish partner to build your next big idea, Rosewin Technologies can help.</p>
          <p>Our founder and primary engineer has nearly 20 years experience in software development and architecture, including network, software, and database structures. Our knowledge of software and database systems and languages is diverse and growing, allowing us to build the best possible front- and back-end solutions to meet your needs.</p>
          <p>We support development on AWS and Azure cloud platforms, making it easy to seamlessly integrate Amazon and Microsoft cloud services into your environment and solutions.</p>
        </div>
      </div>
      <footer id="footer">
        <div className="flex justify-center">
          <img className='w-25' src='rosewin_white_footer_4.png' alt='banner' />
        </div>
        <p className='text-rwt-slate text-center'>Copyright 2023 Rosewin Technologies LLC All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App;
