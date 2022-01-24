const authController = require("../Controllers/authController");
const model = require("../Models/authModel");

test('testtttt', () => {
    let test = model.getAllUsers();
    console.log(test);
});

/*
test('userRightPassWordGetTokenSuccess', () => {
    const req = { email:"jd@test.fr",password:"1234"};

    const res = { text: '', token: '',
        send: function(input) { this.text = input },
        cookie: function (key,value){this.token =value},
    };
    authController.signIn(req, res);
    expect(res.token).not.toBe('');
});


test('userWrongPassWordGetTokenFail', () => {
    const req = { email:"jd@test.fr",password:"wrongpassword"};

    const res = { text: '', token: '',
        send: function(input) { this.text = input },
        cookie: function (key,value){this.token =value},
    };
    authController.signIn(req, res);
    console.log(res.token);

    expect(res.token).toBe('');
});*/