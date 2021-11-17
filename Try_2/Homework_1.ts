// Створити такі класи:
//     1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря

enum ESex {
    MALE = 'male',
    FEMALE = 'female'
}

// interface IDeputy {
//     name: string,
//     age: number,
//     sex: ESex,
//     degree_of_honesty: number,
//     minimum_amount_of_bribe: number
// }

class Deputy {
    name: string;
    age: number;
    sex: ESex;
    degree_of_honesty: number;
    minimum_amount_of_bribe: number;


    constructor(name: string, age: number, sex: ESex, degree_of_honesty: number, minimum_amount_of_bribe: number) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.degree_of_honesty = degree_of_honesty;
        this.minimum_amount_of_bribe = minimum_amount_of_bribe;
    }

    giveABribe(bribe: number): void {
        if (bribe < this.minimum_amount_of_bribe) {
            console.log("Взятка не успішна")
            return;
        }
        if (bribe > this.minimum_amount_of_bribe + (this.minimum_amount_of_bribe * this.degree_of_honesty / 100)) {
            console.log("Взятка успішна");
            return;
        }
        if (bribe > this.minimum_amount_of_bribe && bribe < this.minimum_amount_of_bribe + (this.minimum_amount_of_bribe * this.degree_of_honesty / 100)) {
            console.log("Депутат вагається");
        }
    }
}

// 2) Партія
// - назва
// - голова (Депутат)
// - члени партії (Масив депатутатів)

class Party {
    name: string;
    head: Deputy;
    members: Deputy[];


    constructor(name: string, head: Deputy, members: Deputy[]) {
        this.name = name;
        this.head = head;
        this.members = members;
    }

    deleteDeputy(deputyName: string) {
        for (let i = 0; i < this.members.length; i++) {
            if (this.members[i].name === deputyName) {
                this.members.splice(i, 1);
            }
        }
    }

    addDeputy(deputy: Deputy) {
        this.members.push(deputy);
        console.log(this.members);
    }

    showMembers(): void {
        console.log(this.members);
    }

    showAllBribeTakers(): void {
        for (const deputy of this.members) {
            if (deputy.degree_of_honesty < 50) {
                console.log(deputy);
            }
        }
    }

    showTheBigestBribeTaker(): void {
        let theBigestBribeTaker = this.members[0];
        for (const deputy of this.members) {
            if (deputy.degree_of_honesty < theBigestBribeTaker.degree_of_honesty) {
                theBigestBribeTaker = deputy;
            }
        }
        console.log(theBigestBribeTaker);
    }
}


// 3) Верхрвна рада
// - масив партій
// - решті полів на вибір

class Verkhovna_Rada {
    Parties: Party[];


    constructor(Parties: Party[]) {
        this.Parties = Parties;
    }

    addParty(Party: Party) {
        this.Parties.push(Party);
        console.log(this.Parties);
    }

    deleteParty(partyName: string) {
        for (let i = 0; i < this.Parties.length; i++) {
            if (this.Parties[i].name === partyName) {
                this.Parties.splice(i, 1);
            }
        }
        console.log(this.Parties);
    }

    showAllParties(): void {
        console.log(this.Parties);
    }

    showParty(partyName: string): void {
        for (let i = 0; i < this.Parties.length; i++) {
            if (this.Parties[i].name === partyName) {
                console.log(this.Parties[i]);
            }
        }
    }

    showTheBigestBribeTaker(): void {
        let theBigestBribeTaker = this.Parties[0].members[0];
        for (const paty of this.Parties) {
            for (const member of paty.members) {
                if (member.degree_of_honesty < theBigestBribeTaker.degree_of_honesty) {
                    theBigestBribeTaker = member;
                }
            }

        }
        console.log('*****************************');
        console.log(theBigestBribeTaker);
        console.log('*****************************')
    }
}


// Мають бути присутні такі можливості:
//     - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
// - вивести найбільшого хабарника верховної ради
// - вивести фсіх депутатів фракції
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
//     Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається
//
// Якщо сума взятки менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
//     Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
//     та бере хабар.
//     Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
//
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!

const Dmitro = new Deputy('Dmitro', 34, ESex.MALE, 30, 1000);
const Vasya = new Deputy('Vasya', 31, ESex.MALE, 78, 1500);
const Petya = new Deputy('Petya', 30, ESex.MALE, 15, 1300);
const Kolya = new Deputy('Kolya', 29, ESex.MALE, 40, 2000);
const Olya = new Deputy('Olya', 28, ESex.FEMALE, 60, 2677);
const Max = new Deputy('Max', 30, ESex.MALE, 25, 3000);

let Patriots = new Party('Patriots', Petya, [Dmitro, Vasya, Petya, Kolya, Olya, Max]);

const Anya = new Deputy('Anya', 45, ESex.FEMALE, 99, 6000);
const Oleg = new Deputy('Oleg', 51, ESex.MALE, 34, 2000);
const Andrey = new Deputy('Andrey', 56, ESex.MALE, 15, 500);
const Masha = new Deputy('Masha', 25, ESex.FEMALE, 50, 3000);
const Olga = new Deputy('Olga', 31, ESex.FEMALE, 13, 5000);
const Maxim = new Deputy('Maxim', 46, ESex.MALE, 34, 3000);

let Nationalists = new Party('Nationalists', Andrey, [Anya, Oleg, Andrey, Masha, Olga, Maxim]);

let Parliament = new Verkhovna_Rada([Patriots, Nationalists]);

Parliament.showAllParties();

Patriots.showAllBribeTakers();

Parliament.showTheBigestBribeTaker();

Anya.giveABribe(5000);
Anya.giveABribe(7000);
Anya.giveABribe(12000);

Parliament.deleteParty('Patriots');