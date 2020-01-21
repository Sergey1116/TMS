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

    let res_users = GetAllMatches(data_users, res_promt);

    OutputToAlert(res_users);

    res_users = GetAllMatchesCaseInsensitive(data_users, res_promt);

    OutputToAlert(res_users);
}

function GetAllMatches(data_users, res_promt) {
    let res = [];
    data_users.forEach(user => {
        if (user.lastName === res_promt) {
            res.push(user);
        }
    });
    return res;
}

function GetAllMatchesCaseInsensitive(data_users, res_promt) {
    let res = [];
    data_users.forEach(user => {
        if (user.lastName.replace(/\s+/g, '').toUpperCase() === res_promt.replace(/\s+/g, '').toUpperCase()) {
            res.push(user);
        }
    });
    return res;
}

function OutputToAlert(res_users) {
    if (res_users.length > 0) {
        let res_string = "";
        res_users.forEach(user => {
            res_string += "user name: " + user.firstName + " " + user.lastName + ".\n" + "user age: " + user.age + ".\n\n";
        });
        alert(res_string);
    } else {
        alert("Exeption: No results found for your request");
    }
}