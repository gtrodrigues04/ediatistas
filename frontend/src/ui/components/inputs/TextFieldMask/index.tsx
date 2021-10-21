import React from 'react'
import InputMask from 'react-input-mask'
import TextField from '../TextField'
import { OutlinedTextFieldProps } from '@mui/material'

export interface TextFieldProps  extends OutlinedTextFieldProps
{
    mask: string;
    value: string;
} 

export const TextFieldMask: React.FC<TextFieldProps> = ({mask, value, onChange, ...props}) => {
    return ( <InputMask mask={mask} value={value} onChange={onChange}>
        {() => {
            return (
                <TextField {...props}/>
            ) 
        }
    }
    </InputMask>
    );
}