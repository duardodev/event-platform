import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

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
    <a href="#">
      <span className="text-gray-300 first-letter:capitalize block">
        {availabilityDateFormatted}
      </span>

      <div className="p-4 border border-gray-500 rounded mt-2">
        <header className="mb-4 flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-semibold flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-semibold flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs text-white font-bold border px-2 py-[0.125rem] border-green-300 rounded">
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="text-gray-200">{title}</strong>
      </div>
    </a>
  );
}
