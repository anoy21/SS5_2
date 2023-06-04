    function submitData() {
        var nameTag = document.getElementById("name")
        localStorage.setItem("name", nameTag.value)

        var ageTag = document.getElementById("age")
        localStorage.setItem("age", ageTag.value)

        var emailTag = document.getElementById("email")
        localStorage.setItem("email", emailTag.value)

    }
    
    function showData() {
        name = localStorage.getItem("name")
        age = localStorage.getItem("age")
        email = localStorage.getItem("email")

        document.getElementById("data").innerHTML += 
        `
        <tr>${name}</td>
        <tr>${age}</td>
        <tr>${email}</td>
        `
    }
