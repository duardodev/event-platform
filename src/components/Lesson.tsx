import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import classnames from 'classnames';

import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availabilityDate: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();
  const isActiveLesson = slug === props.slug;

  const isLessonAvailable = isPast(props.availabilityDate);
  const availabilityDateFormatted = format(props.availabilityDate, "E' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  });

  return (
    <Link to={`/platform/lesson/${props.slug}`} className="group">
      <span className="text-gray-300 first-letter:capitalize block">
        {availabilityDateFormatted}
      </span>

      <div
        className={classnames(
          'p-4 border border-gray-500 rounded mt-2 group-hover:border-blue-500',
          {
            'bg-blue-500': isActiveLesson
          }
        )}
      >
        <header className="mb-4 flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classnames('text-sm font-semibold flex items-center gap-2', {
                'text-white': isActiveLesson,
                'text-cyan-500': !isActiveLesson
              })}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-semibold flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classnames(
              'text-xs text-white font-bold border px-2 py-[0.125rem] rounded',
              {
                'border-white': isActiveLesson,
                'border-green-300': !isActiveLesson
              }
            )}
          >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={classnames('mt-5 block', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
