import React from 'react'
import '../styles/section.css'

export default function Section(props) {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}

export const SectionTitle = (props) => {
    return (
        <div className="section__title">
            {props.children}
        </div>
    )
}
export const SectionBody = (props) => {
    return (
        <div className="section__body">
            {props.children}
        </div>
    )
}