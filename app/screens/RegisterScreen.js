import React from 'react';
import { StyleSheet } from 'react-native';
import { AppForm, AppFormField, SubmitButton} from '../components/forms';
import Screen from '../components/Screen';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name : Yup.string().required().min(4).label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
})
function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                 initialValues={{name:'', email:'', password:'' }}
                 onSubmit={values => console.log(values)}
                 validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize = 'none'
                    autoCorrect={false}
                    icon='account'
                    name= 'name'
                    textContentType='name'
                    placeholder = 'Name'
                />
                <AppFormField
                   autoCapitalize = 'none'
                   autoCorrect={false}
                    icon='email'
                    name= 'email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    placeholder = 'Email'
                />
                <AppFormField
                   autoCapitalize = 'none'
                   autoCorrect={false}
                    icon='lock'
                    name= 'password'
                    secureTextEntry 
                    textContentType='password'
                    placeholder = 'Password'
                />
                <SubmitButton title='Register'/>
            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:10,
        alignContent:'center'
    }
})
export default RegisterScreen;