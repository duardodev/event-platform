import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Link } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availabilityDate: Date;
  type: 'live' | 'class';
}

export function Lesson({ title, slug, availabilityDate, type }: LessonProps) {
  const isLessonAvailable = isPast(availabilityDate);
  const availabilityDateFormatted = format(availabilityDate, "E' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  });

  return (
    <Link to={`/platform/lesson/${slug}`} className="group">
      <span className="text-gray-300 first-letter:capitalize block">
        {availabilityDateFormatted}
      </span>

      <div className="p-4 border border-gray-500 rounded mt-2 group-hover:border-green-500 group-focus:bg-green-300 transition-colors">
        <header className="mb-4 flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-semibold flex items-center gap-2 group-focus:text-white transition-colors">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-semibold flex items-center gap-2 group-focus:text-white transition-colors">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs text-white font-bold border px-2 py-[0.125rem] border-green-300 rounded group-focus:border-white transition-colors">
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-gray-200 group-focus:text-white transition-colors">{title}</strong>
      </div>
    </Link>
  );
}
