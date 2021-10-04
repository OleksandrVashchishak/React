import React from 'react'

const CreatePage = () => {

    // let user = {
    //     email: 'user@gmail.com',
    //      password: '123456'
    //   };

    const testQuerry = async () => {
        let response = await fetch('https://api.github.com/users/OleksandrVashchishak' , {
            // method: 'POST',
            // headers: {'Content-Type': 'application/json'},
            // body: JSON.stringify(user)
        });


         console.log(response);
        if (response.ok) {
          let json = await response.json();
          console.log(json);
        } else {
          alert("Ошибка HTTP: " + response.status);
        }
    }
 

    return (
        <div>
            <h1>Create page</h1>
            <p onClick={testQuerry}>test</p>
        </div>
    )
}

export default CreatePage
