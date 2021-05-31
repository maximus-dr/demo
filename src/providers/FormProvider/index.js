import React from 'react'
import Form from '../../components/Form/FormView'


export default function FormProvider(props) {
    return (
        <Form {...props}>
            {props.children}
        </Form>
    )
}
