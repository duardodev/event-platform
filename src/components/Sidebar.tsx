import { useAuth } from '../contexts/AuthContext';
import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

import classNames from 'classnames';

export function Sidebar() {
  const { data } = useGetLessonsQuery();
  const { menuIsOpen } = useAuth();

  return (
    <aside
      className={classNames(
        {
          'w-[348px] bg-gray-700 p-6 border-l border-gray-600 hidden lg:block': menuIsOpen === false
        },
        {
          'w-full h-screen bg-gray-700 p-6 pb-24 overflow-y-scroll fixed z-10': menuIsOpen === true
        }
      )}
    >
      <span className="text-2xl text-start font-bold pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availabilityDate={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
