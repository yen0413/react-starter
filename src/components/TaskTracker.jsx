import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
import Footer from './Footer';
import About from './About';
import '../TaskTrack.css';

const TaskTracker = () => {
    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const taskFromServer = await fetchTasks();
            setTasks(taskFromServer);
        };
        getTasks();
    }, []);
    //Fetch Tasks(get all data from server)
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:7070/tasks');
        const data = await res.json();

        return data;
    };

    //Fetch Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:7070/tasks/${id}`);
        const data = await res.json();

        return data;
    };

    //Add Task
    const addTask = async (task) => {
        const res = await fetch(`http://localhost:7070/tasks`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(task),
        });
        const data = await res.json();
        setTasks([...tasks, data]);
        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newTask = { id, ...task };
        // setTasks([...tasks, newTask]);
    };

    //Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:7070/tasks/${id}`, { method: 'DELETE' });

        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        //console.log(taskToToggle);
        const updateTask = {
            ...taskToToggle,
            reminder: !taskToToggle.reminder,
        };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateTask),
        });
        const data = await res.json();
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            )
        );
    };

    return (
        <Router>
            <div className="container-Track">
                <Header
                    onAdd={() => {
                        setShowAddTask(!showAddTask);
                    }}
                    showAdd={showAddTask}
                    taskCount={tasks.length}
                />

                <Route
                    path="/TaskTracker"
                    exact
                    render={(props) => (
                        <>
                            {showAddTask && <AddTask onAdd={addTask} />}
                            {tasks.length > 0 ? (
                                <Tasks
                                    tasks={tasks}
                                    onDelete={deleteTask}
                                    onToggle={toggleReminder}
                                />
                            ) : (
                                'There is no task to show!'
                            )}
                        </>
                    )}
                />
                <Route path="/about" component={About} />
                <Footer />
            </div>
        </Router>
    );
};

export default TaskTracker;
