function TODOHero({ completed_tasks, total_tasks }) {
  
    return (
        <section>
            <div>
                <p>Task Done</p>
                <p>Keep it up</p>
            </div>
            <div>
                {completed_tasks} / {total_tasks}
            </div>
        </section>
  );
}
export default TODOHero;