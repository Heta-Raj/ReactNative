import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';
import * as Yup from 'yup';

function AppFormPicker({ items, name,numberOfColums, placeholder,PickerItemComponent, width}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
          <AppPicker 
            items={items}
            numberOfColums={numberOfColums}
            onSelectedItem={(item) => setFieldValue(name,item)}
            PickerItemComponent={PickerItemComponent}
            placeholder = {placeholder}
            selectedItem={values[name]}
            width={width}
          />  
          <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;