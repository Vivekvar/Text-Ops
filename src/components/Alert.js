import React from 'react'

export default function Alert(props) {
    const capital = (word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{`${capital(props.alert.type)}! `}</strong>{`${props.alert.message}. `}
        </div>
    )
}
