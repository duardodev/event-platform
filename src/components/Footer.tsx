import logoRockeatseat from '../assets/logo-rocketseat.svg';

export function Footer() {
  return (
    <footer className="border-t border-gray-500 text-gray-300 ">
      <div className="w-full m-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img src={logoRockeatseat} alt="Logo da Rocketseat" />
          <p>Rocketseat - Todos os direitos reservados</p>
        </div>

        <div className="flex items-center gap-6">
          <p>Políticas de privacidade</p>
          <p>
            Desenvolvidor por{' '}
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
