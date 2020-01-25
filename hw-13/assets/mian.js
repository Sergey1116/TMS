var data_users = [{
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age: 40
}, {
    firstName: 'Tom',
    lastName: 'Kutcher',
    age: 28
}, {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age: 54
}, {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age: 24
}];

//task_1 and task_2
{
    let res_promt = prompt("Enter user last name:");

    let res_users = getAllMatches(data_users, res_promt);

    outputToAlert(res_users);

    res_users = getAllMatchesCaseInsensitive(data_users, res_promt);

    outputToAlert(res_users);
}

function getAllMatches(data_users, res_promt) {
    let res = [];
    res = data_users.filter(user => (user.lastName === res_promt));
    return res;
}

function getAllMatchesCaseInsensitive(data_users, res_promt) {
    let funcCastLit = function (lastName) {
        return lastName.replace(/\s+/g, '').toUpperCase();
    }
    res_promt = funcCastLit(res_promt);
    let res = data_users.filter(user => (funcCastLit(user.lastName) === res_promt));
    return res;
}

function outputToAlert(res_users) {
    if (res_users.length > 0) {
        let res_string = "";
        res_users.forEach(user => {
            res_string += `user name:  ${user.firstName}  ${user.lastName}.\nuser age: ${user.age}.\n\n`;
        });
        alert(res_string);
    } else {
        alert("Exeption: No results found for your request");
    }
}