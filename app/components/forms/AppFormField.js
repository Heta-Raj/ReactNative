import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';

function AppFormField({name,width, ...otherProps}) {
    const{setFieldTouched,handleChange,errors,touched} = useFormikContext();
    return (
        <>
            <AppTextInput
                // autoCapitalize = 'none'
                // autoCorrect={false}
                // icon = 'email'
                // keyboardType='email-address'
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
                width={width}
                // placeholder ='Email'
                // textContentType='emailAddress'
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;