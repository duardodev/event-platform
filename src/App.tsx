import { gql, useQuery } from '@apollo/client';

interface Lesson {
  id: string;
  title: string;
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>;
      })}
    </ul>
  );
}

export default App;
