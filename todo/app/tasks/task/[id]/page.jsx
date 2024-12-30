import axios from 'axios';

export const metadata = {
    title: 'Détails d une tâche',
    description: 'Consultez les détails d une tâche',
};

async function fetchTask(id) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return res.data;
}

export default  async function TaskDetails({ params }) {
    const task =  await fetchTask(params.id);

    return (
        <main>
            <h1>Détails de cette tâche</h1>
            <p><strong>ID :</strong> {task.id}</p>
            <p><strong>Titre :</strong> {task.title}</p>
            <p><strong>Status :</strong> {task.completed ? 'Complétée' : 'En cours'}</p>
            {/* <p>
                <a href={`/tasks/user/${task.userId}`}>Voir + pour cette user</a>
            </p> */}
        </main>
    );
}
