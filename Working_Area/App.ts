// Створити такі класи:
//     1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря

enum ESex {
    Male = 'Male',
    Female = 'Female'
}

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

    bribe(sum: number) {
        if (sum < this.minimum_amount_of_bribe) {
            console.log('Не вдалося дати хабар');
        }
        if (sum < this.minimum_amount_of_bribe && sum < this.minimum_amount_of_bribe + this.minimum_amount_of_bribe * this.degree_of_honesty / 100) {
            console.log('Депутат вагається');
        }
        if (sum > this.minimum_amount_of_bribe + this.minimum_amount_of_bribe * this.degree_of_honesty / 100) {
            console.log('Хабар прийнято');
        }
    }
}


// 2) Партія
// - назва
// - голова (Депутат)
// - члени партії (Масив депатутатів)

class Party {
    name: string;
    chairman: Deputy;
    party_members: Deputy[];

    constructor(name: string, chairman: Deputy, party_members: Deputy[]) {
        this.name = name;
        this.chairman = chairman;
        this.party_members = party_members;
    }

    add_deputy(Deputy: Deputy) {
        this.party_members.push(Deputy);
        console.log(this.party_members)
    }

    remove_deputy(Deputy: Deputy) {
        const index = this.party_members.indexOf(Deputy)
        if (index > -1) {
            this.party_members.splice(index, 1);
        }
        console.log(this.party_members)
    }

    show_deputies() {
        console.log(this.party_members);
    }

    show_all_bribe_takers() {
        const bribe_takers = this.party_members.filter(item => item.degree_of_honesty < 50)
        console.log(bribe_takers);
    }

    show_the_bigest_bribe_taker() {

        let the_bigest_bribe_taker = this.party_members[0];

        for (let i = 1; i < this.party_members.length; i++) {
            if (this.party_members[i].degree_of_honesty < the_bigest_bribe_taker.degree_of_honesty) {
                the_bigest_bribe_taker = this.party_members[i]
            }
        }
        console.log(the_bigest_bribe_taker);
        return the_bigest_bribe_taker;
    }
}

// 3) Верхрвна рада
// - масив партій
// - решті полів на вибір

class Verkhovna_Rada {
    parties: Party[];

    constructor(parties: Party[]) {
        this.parties = parties;

    }

    add_fraction(fraction: Party) {
        this.parties.push(fraction);
        console.log(this.parties)
    }

    remove_fraction(fraction: Party) {
        const index = this.parties.indexOf(fraction)
        if (index > -1) {
            this.parties.splice(index, 1);
        }
        console.log(this.parties)
    }

    show_fractions() {
        console.log(this.parties);
    }

    show_fraction(fraction: Party) {
        const index = this.parties.indexOf(fraction)
        if (index > -1) {
            console.log(this.parties[index]);
        }
    }

    show_the_bigest_bribe_taker() {

        let the_bigest_bribe_taker = this.parties[0].party_members[0];

        for (let i = 0; i < this.parties.length; i++) {
            for (let j = 0; j < this.parties[i].party_members.length; j++) {
                if (this.parties[i].party_members[j].degree_of_honesty < the_bigest_bribe_taker.degree_of_honesty) {
                    the_bigest_bribe_taker = this.parties[i].party_members[j]
                }
            }
        }

        console.log('*****************************')
        console.log(the_bigest_bribe_taker);
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
// - вaгається
//
// Якщо сума взяти менша за мінімальку, тоді хабар дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
//     Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
//     та бере хабар.
//     Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
//
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!

const Dmitro = new Deputy('Dmitro', 34, ESex.Male, 30, 1000);
const Vasya = new Deputy('Vasya', 31, ESex.Male, 78, 1500);
const Petya = new Deputy('Petya', 30, ESex.Male, 15, 1300);
const Kolya = new Deputy('Kolya', 29, ESex.Male, 40, 2000);
const Olya = new Deputy('Olya', 28, ESex.Female, 60, 2677);
const Max = new Deputy('Max', 30, ESex.Male, 25, 3000);

let Patriots = new Party('Patriots', Petya, [Dmitro, Vasya, Petya, Kolya, Olya, Max]);

const Anya = new Deputy('Anya', 45, ESex.Female, 99, 6000);
const Oleg = new Deputy('Oleg', 51, ESex.Male, 34, 2000);
const Andrey = new Deputy('Andrey', 56, ESex.Male, 15, 500);
const Masha = new Deputy('Masha', 25, ESex.Female, 50, 3000);
const Olga = new Deputy('Olga', 31, ESex.Female, 13, 5000);
const Maxim = new Deputy('Maxim', 46, ESex.Male, 34, 3000);

let Nationalists = new Party('Nationalists', Andrey, [Anya, Oleg, Andrey, Masha, Olga, Maxim]);

let Parliament = new Verkhovna_Rada([Patriots, Nationalists]);

Parliament.show_fractions();

Patriots.show_all_bribe_takers();

Parliament.show_the_bigest_bribe_taker();

Anya.bribe(5000)
Anya.bribe(7000)
Anya.bribe(12000)

