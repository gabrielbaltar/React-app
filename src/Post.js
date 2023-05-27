import React from "react";


export default function Post(props) {
    console.log(props)
    return (

        <>
        <article>
            <h3>{props.post.title}</h3><br/>
            <small>{props.post.subtitle}</small>
        </article>
        <br />
        </>

    );
}