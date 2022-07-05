import { CaretCircleLeft } from 'phosphor-react';
import { Link } from 'react-router-dom';

import absorptionImg from '../assets/absorption.svg';

export function PageNotFound() {
  return (
    <div className="flex items-center justify-center gap-20">
      <img src={absorptionImg} alt="" className="hidden invisible lg:block lg:visible md:w-30px" />

      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-7xl font-bold text-red-500 sm:text-8xl">Error 404!</h1>
        <p className="text-sm mt-4 text-center text-gray-300 sm:text-base">
          A página que você requisitou não foi encontrada <br />
          ou está temporariamente indisponível.
        </p>

        <Link
          to="/"
          className="mt-8 text-sm uppercase font-bold p-4 rounded bg-blue-500 hover:bg-blue-700 transition-colors flex items-center justify-center gap-[10px]"
        >
          <CaretCircleLeft size={24} />
          Retorne à página anterior
        </Link>
      </div>
    </div>
  );
}
