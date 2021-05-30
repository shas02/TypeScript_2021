// 1) написать интерфейс Animal который описывает:
//     -тип движения животного(плавает, ходит, бегает) типа стринг
// -что говорит тип стринг (Рыбы не разговаривают)
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal

interface IAnimal {
    name: string,
    move: string[],
    say: string,

    information(): void;
}

class Cat implements IAnimal {
    name: string;
    move: string[];
    say: string;

    constructor(name: string = 'Cat', move: string[] = ['ходит', 'бегает'], say: string = 'Мяу') {
        this.name = name;
        this.move = move;
        this.say = say;
    }

    information() {
        console.log(this.name, this.move, this.say)
    }
}

let Barsick = new Cat('Barsick');
console.log(Barsick);
Barsick.information();

class Bird implements IAnimal {
    name: string;
    move: string[];
    say: string;

    constructor(name: string = 'Bird', move: string[] = ['ходит', 'бегает', 'летает'], say: string = 'Кар-Кар') {
        this.name = name;
        this.move = move;
        this.say = say;
    }

    information() {
        console.log(this.name, this.move, this.say)
    }
}

class Fish implements IAnimal {

    name: string;
    move: string[];
    say: string;

    constructor(name: string = 'Fish', move: string[] = ['плавает'], say: string = 'Рыбы не разговаривают') {
        this.name = name;
        this.move = move;
        this.say = say;
    }

    information() {
        console.log(this.name, this.move, this.say)
    }
}

// 2) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()

abstract class Shape {
    a: number
    b: number


    protected constructor(a: number, b: number) {
        this.a = a;
        this.b = b;

    }

    abstract perimeter(): void;


    abstract area(): void;
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

        S > 0 ? console.log(S) : console.log('Трикутника з такими сторонами існувати не може')
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

    area(): void {
        let S = this.a * this.b
        console.log(S)
    }
}

// кладем в массив экземпляры классов(количество может быть любым но мин 2)
let Triangle1 = new Triangle(3, 7, 256);
let Triangle2 = new Triangle(14, 14, 14);

let Rectangle1 = new Rectangle(4, 34);
let Rectangle2 = new Rectangle(18, 20);

let Arr = [Triangle1, Triangle2, Rectangle1, Rectangle2];

// приходимся циклом по нему и и высчитываем площадь для каждой фигуры

for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
    Arr[i].area();
    Arr[i].perimeter();
}