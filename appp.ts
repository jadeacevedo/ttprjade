const form: HTMLFormElement = document.getElementById('age-form') as HTMLFormElement

const formFields = {
    age: 'number',
    userName: 'string '
}


type FormValidationObject = {
    [key: string]: {
        valid: boolean
        message: string
    }
}

const validateForm = (): FormValidationObject => {
    const validation: FormValidationObject = {}

    for (const field in Object.keys(formFields)) {
        const fieldType = formFields[field]

        if (fieldType === 'number') {
            const value = (form.elements[field] as HTMLInputElement).valueAsNumber
            if (isNaN(value)) {
                validation[field] = {
                    valid: false,
                    message: field + ' must be a number'
                }
            } else {
                validation[field] = {
                    valid: true,
                    message: ''
                }
            }
            if (value < 0) {
                validation[field] = {
                    valid: false,
                    message: field + ' must be a positive number'
                }
            } else {
                validation[field] = {
                    valid: true,
                    message: ''
                }
                console.log(value)
            }
        } else if (fieldType === 'string') {
            const value = (form.elements[field] as HTMLInputElement).value
            if (value.length === 0) {
                validation[field] = {
                    valid: false,
                    message: field + ' is required'
                }
            }

            else {
                validation[field] = {
                    valid: true,
                    message: ''
                }
            }


        } else {
            const value = (form.elements[field] as HTMLInputElement).value
            console.log(value)
        }

    }

    return validation
}
form!.addEventListener('submit', (event) => {
    event.preventDefault()
    const validation = validateForm()
    for (const field of Object.keys(validation)) {
        if (!validation[field].valid) {
            alert(validation[field].message)
            return
        }
    }
    alert('Form submitted')
    
})



