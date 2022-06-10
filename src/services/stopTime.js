export const stopTime = (time, task) => {
    if (task.completed) {
        return `Задача завершена`
    } else if (time < 60) {
        return `Задача создана ${time} секунд назад`
    } else {
        return `Задача создана ${Math.floor(time / 60)} минут`
    }
}

console.log(stopTime(12, {completed: true}))