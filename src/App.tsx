import { useState } from "react";
import logo from "./Assets/img/logo.svg";
import bglarge from "./Assets/img/bglarge.png";
import lifevet from "./Assets/img/services/lifevet.png";
import rangelimoveis from "./Assets/img/services/rangelimoveis.png";
import laletra from "./Assets/img/services/laletra.png";
import feedget from "./Assets/img/services/feedget.png";
import {
  Bookmark,
  CaretDoubleDown,
  CaretDown,
  GithubLogo,
  InstagramLogo,
  Tag,
  TagChevron,
} from "phosphor-react";
export function App() {
  const services = [
    {
      name: "Laletra",
      img: {
        src: laletra,
        alt: "Laletra",
      },
      url: "https://www.laletra.com.br",
      tags: "React, Typescript, Laravel...",
    },
    {
      name: "Rangel Imóveis",
      img: {
        src: rangelimoveis,
        alt: "Rangel Imóveis",
      },
      url: "https://www.rangelimoveisRJ.com.br",
      tags: "React, Typescript, Laravel...",
    },
    {
      name: "FeedGet",
      img: {
        src: feedget,
        alt: "FeedGet",
      },
      url: "https://feedget.kayooliveira.com",
      tags: "React, Typescript, Tailwind...",
    },
    {
      name: "Life.Vet",
      img: {
        src: lifevet,
        alt: "Life.Vet",
      },
      url: "https://life.vet.br",
      tags: "React, Typescript, Laravel...",
    },
  ];

  return (
    <>
      <div
        className="w-full relative h-full min-h-[100vh] bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('${bglarge}')`,
        }}
      >
        <img className="md:w-40 sm:w-30" src={logo} alt="KayoOliveira_Logo" />
        <h1 className="text-[3rem] text-white font-logo uppercase">
          Kayo Oliveira
        </h1>
        <a
          href="#inicio"
          className="flex flex-col absolute text-white bottom-2 animate-bounce"
        >
          <CaretDown weight="bold" size="60" />
          <CaretDown weight="bold" size="60" className="-mt-11" />
          <CaretDown weight="bold" size="60" className="-mt-11" />
          <CaretDown weight="bold" size="60" className="-mt-11" />
        </a>
      </div>

      <div
        id="inicio"
        className="flex flex-col justify-between w-full h-full relative min-h-[100vh]"
      >
        <header className="sticky z-10 top-0">
          <nav
            className="h-16 flex p-2 flex-row justify-between items-center bg-primary-900 rounded-b-xl bg-top bg-fixed bg-cover"
            style={{}}
          >
            <div>
              <img className="w-14" src={logo} alt="KayoOliveira_logo" />
            </div>
            <div>
              <ul className="flex font-logo text-white uppercase  flex-row justify-between items-center">
                <li className="mx-2">
                  <a
                    href=""
                    className="flex flex-row items-center hover:underline hover:underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramLogo weight="bold" size="20" />
                    <span className="ml-2">Instagram</span>
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href=""
                    className="flex flex-row items-center hover:underline hover:underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubLogo weight="bold" size="20" />
                    <span className="ml-2">Github</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="text-primary-900">
          <h2 className="text-center m-2 text-[1.5rem] underline font-logo">
            SERVIÇOS
          </h2>
          <div
            id="servicos"
            className="w-5/6 mt-6 mx-auto md:flex-row sm:items-center sm:gap-y-10 sm:flex-col flex items-stretch md:justify-center sm:justify-evenly flex-row gap-8"
          >
            {services.map((service) => (
              <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-800 w-60 min-h-[15rem] relative text-center flex flex-col items-center justify-evenly rounded-md p-2 hover:-translate-y-1 transition-all"
              >
                <img
                  className="w-50 rounded"
                  src={
                    service.img.src
                      ? service.img.src
                      : "https://via.placeholder.com/200"
                  }
                  alt={service.name}
                />
                <span className="font-bold uppercase">{service.name}</span>

                <div className="absolute left-0 -bottom-6 flex flex-row items-end">
                  <Bookmark weight="fill" size="50" />
                  <span className="text-[0.8rem]">{service.tags}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <footer className="p-4 bg-primary-900 mt-20 rounded-t-xl">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <img className="w-40" src={logo} alt="KayoOliveira_logo" />
              <span className="text-white font-logo uppercase">
                Kayo Oliveira
              </span>
              <span className="text-white font-logo uppercase">
                <a
                  href="
                  mailto:
                  me@kayooliveira.com"
                  className="text-white font-logo uppercase"
                >
                  me@kayooliveira.com
                </a>
              </span>
              <span className="text-white font-logo uppercase">
                <a
                  href="
                  tel:
                  +5521990850443"
                  className="text-white font-logo uppercase"
                >
                  +55 21 990850443
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
