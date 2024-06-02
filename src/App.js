function App() {
  return (
    <div className="App bg-indigo-700 min-h-screen">
      <header className="bg-indigo-900 h-16 text-white flex items-center p-5">
        <p>Uya Topup</p>
      </header>

      <section className="md:m-5 bg-indigo-500 min-h-screen p-5">
        {/* <Games /> */}
        <Menu />
      </section>



      <footer className="bg-indigo-900 h-16">

      </footer>
    </div>
  );
}
function Menu() {
  return (
    <>
      <div className="flex justify-center">
        <input className="m-1 p-2" type="text" placeholder="Masukkan ID" />
        <input className="m-1 p-2" type="text" placeholder="Region(xxxxxxx)"></input>
      </div>

      <div className="bg-indigo-700 mt-5 p-5">
        <div className="flex p-5 gap-5">
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
        </div>
        <div className="flex p-5 gap-5">
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
        </div>
      </div>
    </>
  );
}

function Games() {
  return (
    <>
      <div className="bg-indigo-300 h-96">

      </div>

      <div className="bg-indigo-300 min-h-screen mt-5">
        <div className="flex p-5 gap-5">
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
        </div>
        <div className="flex p-5 gap-5">
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
        </div>
        <div className="flex p-5 gap-5">
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
          <div className="bg-indigo-500 md:flex-grow h-64"></div>
        </div>
      </div>
    </>
  )
}

export default App;
