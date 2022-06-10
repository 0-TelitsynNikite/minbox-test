import { stopTime } from "../services/stopTime";

describe('check function wich return string about time', () => {
    test('return completed task', () => {
        expect(stopTime(12, true)).toMatch(/Задача завершена/)
    })
    
    test('return time', () => {
        expect(stopTime(12, false)).toMatch(/Задача создана 12 секунд назад/)
    })
})