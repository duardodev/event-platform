import { SignOut } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import logoIgniteLab from '../assets/logo.svg';

export function Header() {
  const navigate = useNavigate();

  function handleOut() {
    if (localStorage.getItem('registered')) {
      localStorage.removeItem('registered');
      navigate('/');
    }
  }

  return (
    <header className="bg-gray-700 border-b border-gray-600">
      <div className="max-w-[1250px] mx-auto py-5 px-4 flex justify-between">
        <img src={logoIgniteLab} alt="Logo do Ignite Lab" />

        <button
          type="button"
          onClick={handleOut}
          className="bg-blue-500 text-white font-medium rounded p-2 flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          Sair da plataforma
          <SignOut size={24} />
        </button>
      </div>
    </header>
  );
}
