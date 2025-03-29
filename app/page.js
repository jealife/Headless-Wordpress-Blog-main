import React from 'react'

export default function Home() {
  return (
    <main className="bg-[url(/bg.jpg)] bg-cover bg-center bg-fixed bg-no-repeat min-h-svh flex flex-col justify-center items-start p-20">
     
     <section className="hero">
        <div className="container">
          <div className="hero-title">
            <h1 className='text-white text-5xl font-bold max-w-lg'>
              The healing power of <span className="text-orange-500 ">Siberian nature in every</span> product your health
            </h1>
          </div>
          <div className="text-slate-100 mt-5">
            <button>To Learn more</button>
            <button>View catalog</button>
          </div>
        </div>
      </section>

    </main>
  );
}


