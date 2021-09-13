import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault(); //取消原本預設的submit事件

        if (!text) {
            alert('Please add a task');
            return;
        }

        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    };

    return (
        <form className="add-form-Track" onSubmit={onSubmit}>
            <div className="form-control-Track">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control-Track">
                <label>Day & Time</label>
                <input
                    type="text"
                    placeholder="Add Day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control-check-Track">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input
                type="submit"
                value="Save Task"
                className="btn-Track btn-block-Track"
            />
        </form>
    );
};

export default AddTask;
