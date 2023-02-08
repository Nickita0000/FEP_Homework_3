const obj = {
    prop: '42',
    prop2: [8, 9, 10, {
        beautifulPropertyName: 88,
        'property with spaces': {
            a: {
                b: '',
                c: {
                    someProperty: [{
                        'prop name': 'I am a smart programmer',
                    }],
                },
            },
        },
    }],
    prop3: function() {
        return {
            baz: 'Hello',
            bar: {
                anotherBeautifulProp: [8, {
                    target: 'It was simple!',
                    qwe: [8, 17, 37],
                }],
            },
        };
    },
};
console.log(obj.prop2[3]['property with spaces'].a.c.someProperty[0]["prop name"]); // I am a smart programmer
console.log(obj.prop3().bar.anotherBeautifulProp[1].target); // It was simple
const math_oper = ['+', '-', '*', '/'];
const operator = prompt("Enter operator +, -, *, /");
const num_a = operand('A');
const num_b = operand('B');
const calc_elem = {
    add : function (num_a, num_b){
        return num_a + num_b;
    },
    sub : function (num_a, num_b){
        return num_a - num_b;
    },                                                      //просто пробовал создать объект
    mul : function (num_a, num_b){
        return num_a * num_b;
    },
    div : function (num_a, num_b){
        return num_a / num_b;
    }
}
validation(num_a, num_b, operator);

function operand(operand_name) {
    return Number(prompt(`Enter operand ${operand_name}`));
}

function validation(num_a, num_b, operator) {
    if (isNaN(num_a) === false && isNaN(num_b) === false && math_oper.includes(operator)) {
        return alert(`${num_a} ${operator} ${num_b} = ${calc(num_a, num_b, operator)}`);
    } else {
        return alert(`Вы ввели неверные данные!`);
    }
}

function calc(num_a, num_b, operator) {
    switch (operator) {
        case `+` :
            return calc_elem.add(num_a, num_b);
        case `-` :
            return calc_elem.sub(num_a, num_b);
        case `*` :
            return calc_elem.mul(num_a, num_b);
        case `/` :
            return calc_elem.div(num_a, num_b);
    }
}