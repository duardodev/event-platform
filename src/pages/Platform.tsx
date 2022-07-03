import { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Platform() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('registered')) {
      navigate('/*');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <Navigate to="/platform/lesson/abertura-do-evento-ignite-lab" />
        )}
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
