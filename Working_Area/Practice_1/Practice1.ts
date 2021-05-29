// 1) написать интерфейс Animal который описывает:
//     -тип движения животного(плавает, ходит, бегает) типа стринг
// -что говорит тип стринг (Рыбы не разговаривают)
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal

interface IAnimal {
    name: string,
    move: string[],
    say: string,
    information: Function
}

const Cat: IAnimal = {
    name: 'Cat',
    move: ['ходит', 'бегает'],
    say: 'Мяу',
    information: () => {
        console.log(Cat)
    }
}
const Bird: IAnimal = {
    name: 'Bird',
    move: ['ходит', 'бегает', 'летает'],
    say: 'Кар-Кар',
    information: () => {
        console.log(Bird)
    }
}
const Fish: IAnimal = {
    name: 'Fish',
    move: ['плавает'],
    say: 'Рыбы не разговаривают',
    information: () => {
        console.log(Fish)
    }
}

// 2) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()

abstract class Shape {
    a: number
    b: number


    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;

    }

    perimeter(): void {
        let P = this.a + this.b
        console.log(P)
    }

    area(): void {
        let S = this.a * this.b
        console.log(S)
    }
}

// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры

class Triangle extends Shape {
    c: number

    constructor(a: number, b: number, c: number) {
        super(a, b);
        this.c = c;
    }

    perimeter(): void {
        let P = this.a + this.b + this.c
        console.log(P)
    }

    area(): void {
        let p = (this.a + this.b + this.c) / 2
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        console.log(S)
    }
}

class Rectangle extends Shape {
    a: number
    b: number


    constructor(a: number, b: number) {
        super(a, b);
    }

    perimeter(): void {
        let P = 2 * (this.a + this.b)
        console.log(P);
    }
    area() {
        super.area();
    }
}

// кладем в массив экземпляры классов(количество может быть любым но мин 2)
let Triangle1 = new Triangle(3,7,9);
let Triangle2 = new Triangle(14,14,14);

let Rectangle1 = new Rectangle(4,34);
let Rectangle2 = new Rectangle(18,20);

let Arr = [Triangle1, Triangle2, Rectangle1, Rectangle2];

// приходимся циклом по нему и и высчитываем площадь для каждой фигуры

for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
    Arr[i].area();
    Arr[i].perimeter();
}