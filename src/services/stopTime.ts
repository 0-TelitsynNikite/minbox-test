type TFunc = (time: number, completed: boolean) => string

export const stopTime: TFunc = (time, completed) => {
    if (completed) {
        return `Задача завершена`
    } else if (time < 60) {
        if (time.toString().endsWith('1')) {
            return `Задача создана ${time} секунду назад`
        } else {
            return `Задача создана ${time} секунды назад`
        }
    } else {
        if (time.toString().endsWith('1')) {
            return `Задача создана ${Math.floor(time / 60)} минуту`
        } else {
            return `Задача создана ${Math.floor(time / 60)} минуты`
        }
    }
}