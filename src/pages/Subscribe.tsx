import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
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

    navigate('/platform');
  }

  return (
    <div className="min-h-screen bg-blur bg-no-repeat bg-cover flex flex-col items-center">
      <div className="w-full max-w-[1100px] mt-20 flex items-center justify-between">
        <div className="max-w-[640px]">
          <img src={logoIgniteLab} alt="" />

          <h1 className="text-[2.5rem] leading-tight mt-8">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com{' '}
            <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="text-gray-200 mt-6">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e
            com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="bg-gray-700 border border-gray-500 rounded p-8">
          <strong className="mb-6 text-2xl block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Seu nome completo"
              className="bg-gray-900 h-14 px-5 rounded outline-none border-2 border-transparent focus:border-green-500 "
              onChange={event => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-gray-900 h-14 px-5 rounded outline-none border-2 border-transparent focus:border-green-500"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 text-white text-sm font-bold uppercase py-4 mt-4 rounded hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={codeMockupImg} className="mt-10" alt="" />
    </div>
  );
}
