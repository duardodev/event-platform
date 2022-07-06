import { useNavigate } from 'react-router-dom';
import { List, SignOut, X } from 'phosphor-react';
import { useAuth } from '../contexts/AuthContext';

import logoIgniteLab from '../assets/logo.svg';

export function Header() {
  const navigate = useNavigate();
  const { menuIsOpen, setMenuIsOpen } = useAuth();

  function handleOut() {
    if (localStorage.getItem('registered')) {
      localStorage.removeItem('registered');
      navigate('/');
    }
  }

  return (
    <header className="bg-gray-700 border-b border-gray-600">
      <div className="max-w-[1250px] mx-auto py-5 px-4 flex justify-between">
        <img src={logoIgniteLab} alt="Logo do Ignite Lab" className="w-[200px] sm:w-[237px]" />

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleOut}
            className="bg-blue-500 -indent-56 overflow-hidden text-white font-medium rounded p-2 flex items-center hover:bg-blue-700 transition-colors sm:gap-2 sm:indent-0 sm:overflow-visible"
          >
            Sair da plataforma
            <SignOut size={24} />
          </button>

          {menuIsOpen === false ? (
            <button
              className="lg:hidden"
              onClick={() => {
                setMenuIsOpen(true);
              }}
            >
              <List className="text-blue-500" size={35} />
            </button>
          ) : (
            <button
              className="lg:hidden"
              onClick={() => {
                setMenuIsOpen(false);
              }}
            >
              <X className="text-blue-500" size={35} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
