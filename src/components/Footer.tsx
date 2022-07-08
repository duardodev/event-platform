import logoRockeatseat from '../assets/logo-rocketseat.svg';

export function Footer() {
  return (
    <footer className="border-t border-gray-500 text-gray-300">
      <div className="w-full m-auto p-6 flex flex-col items-center justify-between gap-6 lg:flex-row md:gap-0">
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          <img src={logoRockeatseat} alt="Logo da Rocketseat" />
          <p className="text-sm sm:text-base">Rocketseat - Todos os direitos reservados</p>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <p className="text-sm sm:text-base">Políticas de privacidade</p>
          <p className="text-sm sm:text-base">
            Desenvolvido por{' '}
            <a
              href="https://github.com/sampaiocode"
              target="_blank"
              className="text-blue-300 hover:text-blue-500 transition-colors"
            >
              sampaiocode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
