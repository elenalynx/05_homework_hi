// Запитати у користувача рік народження.
//     Запитати в нього, в якому місті він живе.
//     Запитати його улюблений вид спорту.
//     При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
//     Його вік.
//     Якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…” і місце точок – введене місто.
//     Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.
// Все це має бути відображено в одному вікні (алерті).
//     Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

const questionYearBirth = 'Вкажи свій рік народження.';
const questionCity = 'В якому місті ти живеш?';
const questionSport = 'Який твій улюбленний вид спорту?';

let yearBirth = '';
let city = '';
let sport = '';

const capitalUkraine = 'Київ';
const capitalUSA = 'Вашингтон';
const capitalUK = 'Лондон';
const countryUkraine = 'України';
const countryUSA = 'США';
const countryUK = 'Великобританії';

const football = 'футбол';
const messi = 'Ліонель Мессі';
const tennis = 'теніс';
const svitolina = 'Еліна Світоліна';
const figureSkating = 'фігурне катання';
const baiul = 'Оксана Баюл';

const answerYear = 'Твій рік народження:';
const answerCapitalCountry = 'Ти живеш у столиці';
const answerCity = 'Ти живеш у місті';
const answerSport = 'Круто! Хочеш стати як';

const exit = 'Шкода, що Ви не захотіли ввести свій(є)';
const exitYear = 'рік народження';
const exitCity = 'місто';
const exitSport = 'улюблений вид спорту';

let resultAnswer = '';

do {
    yearBirth = +prompt(questionYearBirth);
} while (isNaN(yearBirth))

if (yearBirth) {
    resultAnswer = `${answerYear} ${yearBirth}`;
    city = prompt(`
    ${resultAnswer}
    ${questionCity}`);

    if (city) {
        if (city === capitalUkraine) {
            resultAnswer = `
        ${resultAnswer}
        ${answerCapitalCountry} ${countryUkraine}`;
        } else if (city === capitalUSA) {
            resultAnswer = `
        ${resultAnswer}
        ${answerCapitalCountry} ${countryUSA}`;
        } else if (city === capitalUK) {
            resultAnswer = `
        ${resultAnswer}
        ${answerCapitalCountry} ${countryUK}`;
        } else {
            resultAnswer = `
        ${resultAnswer}
        ${answerCity} ${city}`;
        }
    } else {
        alert(`${exit} ${exitCity}`);
    }

    sport = prompt(`
    ${resultAnswer}
    ${questionSport}`);

    if (sport) {
        if (sport === football) {
            resultAnswer = `
            ${resultAnswer}
            ${answerSport} ${messi}?`;
        } else if (sport === tennis) {
            resultAnswer = `
            ${resultAnswer}
            ${answerSport} ${svitolina}?`;
        } else if (sport === figureSkating) {
            resultAnswer = `
            ${resultAnswer}
            ${answerSport} ${baiul}?`;
        }
    } else {
        alert(`${exit} ${exitSport}`);
    }
} else {
    alert(`${exit} ${exitYear}`);
}
alert(resultAnswer);

