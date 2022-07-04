import { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { useCreateSubscriberMutation } from '../graphql/generated';

import logoIgniteLab from '../assets/logo.svg';
import codeMockupImg from '../../src/assets/code-mockup.png';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email
      }
    });

    localStorage.setItem('registered', 'true');
    navigate('/platform');
  }

  useEffect(() => {
    if (localStorage.getItem('registered')) {
      navigate('/platform');
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-blur bg-no-repeat bg-cover flex flex-col items-center">
        <div className="w-full max-w-[1100px] mt-10 flex flex-col items-center justify-center md:mt-20 md:flex-row md:items-center sm:justify-between ">
          <div className="max-w-[640px] mx-6 flex flex-col items-center justify-center md:justify-start md:items-start">
            <img src={logoIgniteLab} alt="" />

            <h1 className="text-3xl leading-tight mt-8 text-center sm:text-[2.5rem] md:text-start">
              Construa uma <strong className="text-cyan-500">aplicação completa</strong>, do zero,
              com <strong className="text-cyan-500">React JS</strong>
            </h1>
            <p className="text-sm text-gray-200 mt-6 text-center md:text-start sm:text-base">
              Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e
              com alta demanda para acessar as melhores oportunidades do mercado.
            </p>
          </div>

          <div className="bg-gray-700 border border-gray-500 rounded py-8 px-6 mt-8 md:mx-6 md:mt-0">
            <strong className="mb-6 text-lg block sm:text-2xl">Inscreva-se gratuitamente</strong>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
              <input
                type="text"
                placeholder="Seu nome completo"
                className="bg-gray-900 h-14 px-5 rounded outline-none border-2 border-transparent focus:border-blue-500 "
                onChange={event => setName(event.target.value)}
              />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="bg-gray-900 h-14 px-5 rounded outline-none border-2 border-transparent focus:border-blue-500"
                onChange={event => setEmail(event.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 text-white text-sm font-bold uppercase py-4 mt-4 rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <div className="mt-4 mx-4 md:mt-10">
          <img src={codeMockupImg} alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
}
