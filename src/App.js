import React from "react";
import Post from "./Post";
import Header from "./Header";

// Functional Component (Componente Funcional)

// Class Components (Componentes de classe)

// Render -> Renderizar

// Props  -> (Propriedades)

function App() {

    return (
        <>
            <Header title="JStack's Blog">
                <h2>Posts da Semana</h2>
                <div>
                    <p>Gabriel Baltar Pereira</p>
                </div>
            </Header>
            <br/>

            <hr/>

            <Post 
                post={{

                    title: "Titulo da notícia 01",
                    subtitle: 'Subtitulo da notícia 01'

                }}
            />
        </>
    );

}

export default App;