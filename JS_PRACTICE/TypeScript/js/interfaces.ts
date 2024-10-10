interface Car {
    readonly id: number
    color?: string
    wheels: number
    feature: {
        speed: number
        power: number
        gas: string
    }
}

const volvo: Car = {
    id: 123,
    color: 'red',
    wheels: 4,
    feature: {
        speed: 240,
        power: 120,
        gas: 'A-95'
    }
}

const mercedes: Car = {
    id: 128,
    wheels: 4,
    feature: {
        speed: 280,
        power: 248,
        gas: 'A-95'
    }
}
mercedes.color = 'black';

const bmw = {} as Car
const lada = <Car> {}