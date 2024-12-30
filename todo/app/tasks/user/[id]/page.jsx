import axios from 'axios';
import Link from 'next/link';

export const metadata = {
    title: 'Tâches d’un utilisateur',
    description: 'Liste des tâches assignées à cette user.',
};

async function fetchUserTasks(userId) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    return res.data;
}

export default async function UserTasks({ params }) {
    const tasks = await fetchUserTasks(params.id);

    return (
        <main>
            <h1>Tâches de cette user {params.id}</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Link href={`/tasks/task/${task.id}`}>{task.title}</Link>
                    </li>
                ))}
            </ul>
            <p>
                <Link href="/">Retour à la liste des tâches</Link>
            </p>
        </main>
    );
}
