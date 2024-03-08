import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from 'next/image'

// import { Eye } from "lucide-react";


export const revalidate = 60;
export default async function ProjectsPage() {

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-200 text-sm">
            Alguns dos projetos são de trabalho e outros são do meu tempo livre.
          </p>
          <p className=" text-zinc-400 text-sm">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href="http://www.med-lista.com">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-center ">
                  <div className="text-xs text-zinc-100">
                    
                  <Image
                    src="/images/capMedlista.jpg"
                    alt="Screenshot do ATV"
                    className="mb-4 rounded-md aspect-[16/10] w-full"
                    width={500} // Largura da imagem
                    height={300} // Altura da imagem
                  />
                      {/* <span>SOON</span> */}

                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Medlista
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Ver mais
                </p>
              </article>
            </Link>
          </Card>

          <Card>
          <Link href="http://www.calcash.com.br">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-center ">
                  <div className="text-xs text-zinc-100">
                    
                  <Image
                    src="/images/CALCAP.jpg"
                    alt="Screenshot do ATV"
                    className="mb-4 rounded-md aspect-[16/10] w-full"
                    width={500} // Largura da imagem
                    height={300} // Altura da imagem
                  />
                      {/* <span>SOON</span> */}

                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Calcash
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Ver mais
                </p>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href="https://guru-do-ingles.vercel.app">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-center ">
                  <div className="text-xs text-zinc-100">
                    
                  <Image
                    src="/images/guruScreenShoot.jpg"
                    alt="Screenshot do ATV"
                    className="mb-4 rounded-md aspect-[16/10] w-full"
                    width={500} // Largura da imagem
                    height={300} // Altura da imagem
                  />
                      {/* <span>SOON</span> */}

                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Guru do Ingles
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Ver mais
                </p>
              </article>
            </Link>
          </Card>


          <Card>
            <Link href="https://devence.com.br">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-center ">
                  <div className="text-xs text-zinc-100">
                    
                  <Image
                    src="/images/devenceCap.jpg"
                    alt="Screenshot do ATV"
                    className="mb-4 rounded-md aspect-[16/10] w-full"
                    width={500} // Largura da imagem
                    height={300} // Altura da imagem
                  />
                      {/* <span>SOON</span> */}

                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Devence
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Ver mais
                </p>
              </article>
            </Link>
          </Card>

          <Card>
            <Link href="https://espacoativamente.com">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-center ">
                  <div className="text-xs text-zinc-100">
                    
                  <Image
                    src="/images/capAtivamente.jpg"
                    alt="Screenshot do ATV"
                    className="mb-4 rounded-md aspect-[16/10] w-full"
                    width={500} // Largura da imagem
                    height={300} // Altura da imagem
                  />
                      {/* <span>SOON</span> */}

                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Ativamente
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Ver mais
                </p>
              </article>
            </Link>
          </Card>

          
          

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">

          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">


          </div>
          <div className="grid grid-cols-1 gap-4">
          
          </div>
          <div className="grid grid-cols-1 gap-4">
            
          </div>
        </div>
      </div>
    </div>
  );
}
