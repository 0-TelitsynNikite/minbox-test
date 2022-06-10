import { stopTime } from "../services/stopTime";

test('return completed task', () => {
    expect(stopTime(12, {completed: true})).toMatch(/Задача завершена/)
})

test('return time', () => {
    expect(stopTime(12, {completed: false})).toMatch(/Задача создана 12 секунд назад/)
})