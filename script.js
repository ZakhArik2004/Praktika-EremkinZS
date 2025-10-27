document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const tasksContainer = document.getElementById('tasksContainer');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('taskTitle').value.trim();
        const description = document.getElementById('taskDescription').value.trim();

        if (!title) return;

        addTask(title, description);
        taskForm.reset();
    });

    function addTask(title, description) {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';
        
        taskCard.innerHTML = `
            <h3>${escapeHtml(title)}</h3>
            ${description ? `<p>${escapeHtml(description)}</p>` : ''}
            <button class="delete-btn">Удалить</button>
        `;

        taskCard.querySelector('.delete-btn').addEventListener('click', () => {
            taskCard.remove();
        });

        tasksContainer.appendChild(taskCard);
    }

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
});