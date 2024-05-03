import React from 'react';
import banner from '../Images/banner2.jpeg';
import icon from "../Images/img2.jpeg";

function About() {
  const aboutList = [
    { name: 'Beatriz', presentation: 'Salve Tubarão! Sou uma estudante de Engenharia de Software e super empolgada pela área da tecnologia, com programação estou familiarizada apenas há 1 ano, porém, sempre estive no meio da tecnologia e consumindo conteúdos desse meio. Estou me aperfeicoando em FrontEnd mas no futuro quero me profissionalizar em Cyber Security e na área de desenvolvimento de Jogos, acredito ser bem esforçada e estou sempre buscando meios de como me aprimorar cada dia no que mais amo que seria a tecnologia!', role: 'Dev FullStack' },
    { name: 'Isabela', presentation: 'Estudante de Engenharia de Software na Fiap. Sou encantada pelo que a tecnologia  pode mudar no mundo, e espero contribuir com inúmeras inovações, seja no meu trabalho ou em projetos dentro da faculdade. Sigo em busca de desafios e oportunidades para continuar aplicando e desenvolvendo ainda mais as minhas habilidades. Possuo conhecimento em: Java Script, Noções com Lógica de Programação, Gestão de Projetos , Storytelling e Front end. Acredito ser uma pessoa colaborativa, criativa e muito comunicativa. Disposta a se desenvolver profissionalmente e pessoalmente, através de hard e soft skills, em busca de agregar valor ao mercado de tecnologia.', role: 'Dev Front End' },
    { name: 'Giovanna', presentation: 'Oie! Sou uma estudante entusiasmada em Engenharia de Software na FIAP. Apesar de ainda estar em fase de aprendizado, estou desenvolvendo habilidades em Python, JavaScript, Front End e Web Development, além de Gestão Ágil, buscando constantemente novos desafios para aplicar meus conhecimentos. Estou empolgada para colaborar em projetos e adquirir experiência prática, contribuindo com ideias inéditas e energia para alcançar objetivos. ', role: 'Dev Front End' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 mb-[50px]">
      <div className="mt-8 mb-12">
        <img src={banner} alt="Banner" className="w-full rounded-lg shadow-lg" />
      </div>
      <hr className="my-8 border-t-4 border-customRose" />
      <div className="text-center">
        <h2 className="text-3xl font-black text-PinkTitle mb-4">About Us</h2>
        {aboutList.map((person, index) => (
          <div key={index} className="flex flex-col items-center md:flex-row mb-8">
            <div className="text-center md:text-left md:mr-4 mb-4">
              <h4 className="text-base font-bold text-gray-700 mb-1">{person.role}</h4>
              <h3 className="text-2xl font-bold text-rose-500 mb-1">{person.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{person.presentation}</p>
            </div>
            <img className='rounded-full w-40 h-40' src={icon} alt="Icon" />
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default About;
