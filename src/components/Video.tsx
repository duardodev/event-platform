import {
  Lightning,
  DiscordLogo,
  FileArrowDown,
  CaretRight,
  Image,
  CircleNotch
} from 'phosphor-react';
import { DefaultUi, Player, Youtube } from '@vime/react';
import { useGetLessonBySlugQuery } from '../graphql/generated';

import '@vime/core/themes/default.css';

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug
    }
  });

  if (!data || !data.lesson) {
    return (
      <div className="h-[80vh] flex flex-1 items-center justify-center">
        <CircleNotch size={40} color="#0d58bb" className="animate-spin max-h-[60vh]" />
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1092px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-6 max-w-[1092px] mx-auto md:p-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:gap-16">
          <div className="flex-1">
            <h1 className="text-lg font-bold mb-4 sm:text-2xl">{data.lesson.title}</h1>
            <p className="text-gray-200 text-sm leading-relaxed sm:text-base">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                  className="h-16 w-16 rounded-full border-2 border-cyan-500"
                />

                <div className="leading-relaxed">
                  <strong className="text-lg font-bold block sm:text-2xl">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-sm text-gray-200 block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>

          <div className="w-full flex flex-col gap-4 md:w-auto">
            <a
              href="#"
              className="p-4 bg-blue-500 text-sm font-bold uppercase rounded flex items-center justify-center gap-[10px] hover:bg-blue-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade no Discord
            </a>

            <a
              href="#"
              className="p-4 text-sm font-bold uppercase text-cyan-500 border border-cyan-500 rounded flex items-center justify-center gap-[10px] hover:bg-cyan-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="mt-20 gap-4 grid grid-rows-2 md:grid-cols-2 md:grid-rows-none md:gap-8">
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-start gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-blue-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <h1 className="text-lg font-bold mb-2 sm:text-2xl">Material complementar</h1>
              <p className="text-sm text-gray-200">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} color="#81D8F7" />
            </div>
          </a>

          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-start gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-blue-700 h-full p-6 flex items-center">
              <Image size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <h1 className="text-lg font-bold mb-2 sm:text-2xl">Wallpapers exclusivos</h1>
              <p className="text-sm text-gray-200">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} color="#81D8F7" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
