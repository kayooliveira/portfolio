import React from "react";
import logoGreen from "./Assets/img/logo_green.svg";
import logoBlue from "./Assets/img/logo_blue.svg";
import lifevet from "./Assets/img/services/lifevet.png";
import rangelimoveis from "./Assets/img/services/rangelimoveis.png";
import laletra from "./Assets/img/services/laletra.png";
import feedget from "./Assets/img/services/feedget.png";
import calculator from "./Assets/img/services/calculator.png";
import avatar from "./Assets/img/avatar.png";
import Particles from "react-tsparticles";
import dev from "./Assets/img/dev.png";
import dev2 from "./Assets/img/dev2.jpg";
import {
  DiHtml5,
  DiCss3,
  DiPhp,
  DiMysql,
  DiLaravel,
  DiReact,
  DiVisualstudio,
  DiAws,
  DiDigitalOcean,
  DiLinux,
  DiWindows,
  DiBootstrap,
  DiJavascript,
  DiLess,
  DiSass,
} from "react-icons/di";
import { GithubLogo, House, InstagramLogo } from "phosphor-react";
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
    {
      name: "Calculator",
      img: {
        src: calculator,
        alt: "Calculator",
      },
      url: "https://www.calculator.kayooliveira.com",
      tags: "React, Typescript, Tailwind...",
    },
  ];

  const skills = [
    {
      name: "HTML",
      icon: DiHtml5,
    },
    {
      name: "CSS",
      icon: DiCss3,
    },
    {
      name: "JavaScript",
      icon: DiJavascript,
    },
    {
      name: "PHP",
      icon: DiPhp,
    },
    {
      name: "MySQL",
      icon: DiMysql,
    },
    {
      name: "Laravel",
      icon: DiLaravel,
    },
    {
      name: "React",
      icon: DiReact,
    },
    {
      name: "Visual Studio",
      icon: DiVisualstudio,
    },
    {
      name: "AWS",
      icon: DiAws,
    },
    {
      name: "Digital Ocean",
      icon: DiDigitalOcean,
    },
    {
      name: "Linux",
      icon: DiLinux,
    },
    {
      name: "Windows",
      icon: DiWindows,
    },
    {
      name: "Bootstrap",
      icon: DiBootstrap,
    },
    {
      name: "Sass",
      icon: DiSass,
    },
  ];

  return (
    <>
      <main className="bg-secondary-800 max-w-screen">
        <Particles
          style={{ position: "absolute", zIndex: 9999 }}
          id="tsparticles"
          options={{
            fullScreen: { enable: false, zIndex: 0 },
            autoPlay: true,
            detectRetina: true,
            fpsLimit: 30,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                  parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 8,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.5,
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#36944A",
              },
              links: {
                color: "#2D7C3E",
                distance: 100,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 500,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          }}
        />
        <header>
          <nav className="w-full z-20 h-[60px] bg-secondary-500 drop-shadow-xl fixed top-0 left-0 flex flex-row items-center justify-evenly">
            <a href="#">
              <img src={logoGreen} alt="logo" className="w-16 self-start" />
            </a>
            <div className="flex-1">
              <ul className="flex flex-row items-center justify-end p-4">
                <li>
                  <a
                    className="text-primary-500 uppercase font-bold hover:text-primary-50 transition-colors mx-6"
                    href="#"
                  >
                    <House size="28" weight="fill" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-primary-500 uppercase font-bold hover:text-primary-50 transition-colors mx-6"
                    href="https://github.com/kayooliveira"
                  >
                    <GithubLogo size="28" weight="fill" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-primary-500 uppercase font-bold hover:text-primary-50 transition-colors mx-6"
                    href="https://instagram.com/kayooliveira.dev"
                  >
                    <InstagramLogo size="28" weight="fill" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="w-screen h-screen bg-gradient-to-br  from-secondary-200">
          <img
            src={avatar}
            alt="Avatar"
            width=""
            className="absolute -left-28  -bottom-10 hidden sm:block z-[999999]"
          />
          <div className="flex-1 flex flex-col sm:absolute sm:right-10 items-center justify-center h-full p-4 text-center">
            <h1 className="text-[3rem] font-logo uppercase text-primary-500">
              Kayo Oliveira
            </h1>
            <h2 className="text-secondary-50 uppercase -my-2">
              Desenvolvedor Fullstack
            </h2>

            <span className="text-secondary-200 text-center mt-4 z-[9999999]">
              Desenvolvo aplicações limpas e intuitivas,
              <br /> procuro sempre dar o meu melhor em cada projeto
              <br />
              desde o mais simples ao mais complexo.
            </span>
          </div>
        </section>
        {/* <section className="min-h-screen border-t-4 pt-16 border-primary-500 bg-white flex flex-col-reverse md:flex-row items-start justify-evenly">
          <aside className="px-4 pt-8 flex flex-row gap-5 md:flex-row md:gap-2 flex-wrap items-center justify-evenly flex-1 w-full">
            {skills.map((skill, index) => (
              <button
                title={skill.name}
                className={`p-2 w-32 h-32 animate-wiggle bg-primary-500 flex items-center justify-center text-[10rem] rounded-md shadow-md hover:bg-primary-800 transition-all hover:-translate-y-1 text-white`}
              >
                {<skill.icon />}
              </button>
            ))}
          </aside>
          <aside className="px-4 w-full md:w-auto">
            <h2 className="text-primary-500 uppercase font-bold text-[3rem] text-center">
              MINHA EXPERIÊNCIA
              <img
                src={dev}
                alt="desenvolvimento de websites"
                className="sm:w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[35rem] mx-auto "
              />
            </h2>
          </aside>
        </section> */}
      </main>
    </>
  );
}
