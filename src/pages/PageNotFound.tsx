import { CaretCircleLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';

import absorptionImg from '../assets/absorption.svg';

export function PageNotFound() {
  return (
    <div className="flex items-center justify-center gap-20">
      <img src={absorptionImg} alt="" />

      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-8xl font-bold text-red-500">Error 404!</h1>
        <p className="mt-4 text-center text-gray-300">
          A página que você requisitou não foi encontrada <br />
          ou está temporariamente indisponível.
        </p>

        <Link
          to="/"
          className="mt-8 text-sm uppercase font-bold p-4 rounded bg-green-500 hover:bg-green-700 transition-colors flex items-center justify-center gap-[10px]"
        >
          <CaretCircleLeft size={24} />
          Retorne à página inicial
        </Link>
      </div>
    </div>
  );
}
