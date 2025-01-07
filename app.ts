/*var counter : number = 1;
counter = counter + 1
console.log(counter)


if (true){
let counter2 = 1
}

const counter3 = 1

counter3 ++

function increment (value:  number){
    counter += value
    console.log(counter)
}

const increment = (value: number) => {
    if (value > 0 || value < 0){ 
        counter += value

        console.log(counter)
    }else{
        throw new Error('Increment by zero is a no-op')

    }
}
increment(1)
increment(1)
increment(1)
const values:number[] = [
    1,
    2,
  3
]
for (const value in value){
  increment (value)
}

const form: HTMLFormElement  = document.getElementById('age-form') as HTMLFormElement
const formFields={
age:'number',
userName:'string '
}
//form!.addEventListener('submit', (event)=> {
  //  event.preventDefault()
   // (way 2 )const age = form.age.valueAsNumber
   // const name = form.userName.value
   
   /* (way 1 )const formData= new FormData(form!)
    const name = formData.get('name')
    const age = formData.get('age')
    if(
        age instanceof File||
        age== null ||
        name instanceof File||
        name == null 
    )
    {
        throw new Error('AGE MUST BE A NUMBER IDIOT')
    
   //( way 2) if(isNaN(age)){
    //throw new Error('AGE MUST BE A NUMBER IDIOT')
   //}
    //console.log(name, age)
    for (const field in Object.keys(formFields)) {
       const fieldType= formFields[field]
      if (fieldType == 'number'){
        const value =(form.elements[field] as HTMLInputElement).valueAsNumber
        if (isNaN (value)){
            throw new Error(field + 'AGE MUST BE A NUMBER IDIOT')
          console.log(value) 
        }
    }
       
       if (value <0 ) {
        throw new Error(field + 'AGE MUST BE A POSITIVE NUMBER IDIOT')
       }
    }
        const  value = form.elements[field]as HTMLInputElement).value
    }
    
})
type FormValidationObject = {
    [key: string]: {
        valid: boolean
        message: string
    }
}

const validateForm = (): FormValidationObject => {
    const validation: FormValidationObject = {}

    for (const field of Object.keys(formFields)) {
        const fieldType = formFields[field]

        if (fieldType === 'number') {
            const value = (form.elements[field] as HTMLInputElement).valueAsNumber
            if (isNaN(value)) {
                
            }
            if (value < 0) {
                throw new Error(field + ' must be a positive number')
            }
            console.log(value)
        } else if (fieldType === 'string') {
            const value = (form.elements[field] as HTMLInputElement).value
            if (value.length === 0) {
                throw new Error(field + ' is required')
            }
        } else {
            const value = (form.elements[field] as HTMLInputElement).value
            console.log(value)
        }
    }
}


form!.addEventListener('submit', (event) => {
    event.preventDefault()

    // const age = form.age.valueAsNumber
    // const name = form.userName.value

    // if (isNaN(age)) {
    //     throw new Error('Age must be a number')
    // }

    // console.log(name, age)


    
}) */