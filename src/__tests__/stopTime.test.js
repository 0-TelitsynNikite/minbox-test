import { stopTime } from "../services/stopTime";

describe('check function wich return string about time', () => {
    test('return completed task', () => {
        expect(stopTime(12, true)).toMatch(/Задача завершена/)
    })
    
    test('return time seconds', () => {
        expect(stopTime(12, false)).toMatch(/Задача создана 12 секунд назад/)
    })

    test('return time seconds with ends 1', () => {
        expect(stopTime(1, false)).toMatch(/Задача создана 1 секунду назад/)
    })

    test('return time minute', () => {
        expect(stopTime(120, false)).toMatch(/Задача создана 2 минут назад/)
    })

    test('return time minute with ends 1', () => {
        expect(stopTime(61, false)).toMatch(/Задача создана 1 минуту назад/)
    })
})