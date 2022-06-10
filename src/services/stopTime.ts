type TFunc = (time: number, completed: boolean) => string

export const stopTime: TFunc = (time, completed) => {
    if (completed) {
        return `Задача завершена`
    } else if (time < 60) {
        return `Задача создана ${time} секунд назад`
    } else {
        return `Задача создана ${Math.floor(time / 60)} минут`
    }
}