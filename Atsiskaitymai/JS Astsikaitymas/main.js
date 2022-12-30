// 1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" atributus.

//1.1) Sukurkite papildomą atributą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").

// 1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()').

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
        this.helloCar = `Labas, čia mano mašina ${name} ir ji buvo pagaminta ${year} metais.`;
    }

    age() {
        const currentYear = new Date().getFullYear();
        return `Mašinai yra ${currentYear - this.year} metai.`;
    }
}