const axios = require('axios');


test('Create a valid Service', async() => {

    class Users {

        static async all() {
            let res = await axios.get('http://localhost:3000/users');
            return res;
        }
    }
    /*return request({
        url: "http://localhost:8080/profile",
        method: "GET",
    }).then(res => {
        if (res.result === 0) return { result: 0, msg: "success" };
        if (res.result === -100) return { result: -100, msg: "need login" };
        return { result: -999, msg: "fail" };
    }).catch(err => {
            return { result: -999, msg: "fail" };
        });*/

    /*const service = {
        email: "cool@test.fr",
        password: "description",
        name: "description",
        lastname: "description",
    };
    try {
        await request(app).get('/auth/create')
        const newCount = await Service.count()
        expect(newCount).toBe(count + 1);
    } catch (err) {
        // write test for failure here
        console.log(`Error ${err}`)
    }*/
});


/*
test('testtttt', () => {
    //let test = model.getAllUsers();
    console.log("coucou");
    expect("test").not.toBe("pas test");

});*/

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