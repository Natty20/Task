import axios from 'axios';
import Link from 'next/link';

export const metadata = {
  title: 'Liste des mes Tâches',
  description: 'Une liste des tâches à réaliser obtenue depuis JSONPlaceholder.',
};

async function fetchTasks() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return res.data.slice(0, 10); // Limiter à 10 tâches pour l'exemple
}

export default async function Home() {
  const tasks = await fetchTasks();

  return (
    <main>
      <h1>Liste des tâches</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={`/tasks/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
