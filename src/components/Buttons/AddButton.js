import React from 'react'

export default function AddButton(props) {
    return (
        <button {...props} >
            {props.name|| 'Add'}
        </button>
    )
}
