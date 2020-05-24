import React from 'react'

export default function todo({ title, completed }) {
    return (
        <li style={{textDecoration: completed ? 'line-through' : 'none'}}>{title}</li>
    )
}
