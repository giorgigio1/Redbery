    let fname = document.getElementById('fName')
    let lName = document.getElementById('lName')
    let email = document.getElementById('email')
    let phone = document.getElementById('phone')
    
    
    fname.addEventListener('keyup',()=>{
        let empty = document.getElementById('errMsgEmp')
        let length = document.getElementById('errMsgLng')
        if (fname.value.length === 0) {
            empty.classList.remove('d-none')
            length.classList.add('d-none')
            fname.classList.add('border-danger')
        }   
        else if (fname.value.length < 3) {
            fname.classList.add('border-danger')
            length.classList.remove('d-none')
            empty.classList.add('d-none')
        }
        else{
            fname.classList.remove('border-danger')
            length.classList.add('d-none')
        }
    })
    
    lName.addEventListener('keyup',()=>{
        let empty = document.getElementById('lErrMsgEmp')
        let length = document.getElementById('lErrMsgLng')
        if (lName.value.length === 0) {
            empty.classList.remove('d-none')
            length.classList.add('d-none')
            lName.classList.add('border-danger')
        }   
        else if (lName.value.length < 3) {
            lName.classList.add('border-danger')

            length.classList.remove('d-none')
            empty.classList.add('d-none')
        }
        else{
            lName.classList.remove('border-danger')
            length.classList.add('d-none')
        }
    })

    email.addEventListener('keyup',()=>{
        let empty = document.getElementById('eErrMsgEmp')
        let format = document.getElementById('eErrMsgFrm')
        if (email.value.length === 0) {
            empty.classList.remove('d-none')
            format.classList.add('d-none')
            email.classList.add('border-danger')
        }   
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            email.classList.add('border-danger')
            format.classList.remove('d-none')
            empty.classList.add('d-none')
        }
        else{
            email.classList.remove('border-danger')
            format.classList.add('d-none')
        }
    })

    phone.addEventListener('keyup',()=>{
        let regex = /^\+9955\d\d\d\d\d\d\d\d$/i;
        let format = document.getElementById('pErrMsg')
        if (!regex.test(phone.value)) {
            phone.classList.add('border-danger')
            format.classList.remove('d-none')
        }
        else{
            phone.classList.remove('border-danger')
            format.classList.add('d-none')
        }
    })

    // function s() {
    //     sessionStorage.setItem('gio', '1993');
       
    //     // Get saved data from sessionStorage
      
    // }
    // let data = sessionStorage.getItem('gio');
        
    // console.log(data)
    
    
    // document.getElementById('btn').addEventListener('click', () => {
    //     s()
    // });