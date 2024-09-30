import React from 'react'

const TextoEmClasse = ({ color, transform, bkgc}) => {
        return (
                <p style= {{color: color, textTransform: transform, backgroundColor: bkgc}}>Seu time fracassa rotundamente em campo e a resposta dele não argumenta nada, só agride. Ele passou dos limites do razoável e só do campo pode vir a reversão a partir de vitórias que afastem o Grêmio do Z-4. Aos microfones, Renato está exalando uma valentia inversamente proporcional à sua capacidade do momento de melhorar o futebol do seu time. Preocupante demais.</p>
        )
    }

export default TextoEmClasse

TextoEmClasse.defaultProps = {
    color: 'blue',
    transform: 'uppercase',
    bkgc: 'pink'
};


