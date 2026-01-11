import styled from "styled-components";

const SecaoRodape = styled.footer`
    background-color: #222177;
    color: #fff;
    padding: 3rem;
`
const SecaoRodapeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    justify-content: between;
    padding: 2rem 0 2rem 4rem;
    gap: 6rem;

        h2 {
            margin-bottom: 1.2rem;
            
        }

        p {
            margin-bottom: .5rem;
            color: #cccccc;
            font-weight: bold;
        }
`


const SecaoRodapedireitos = styled.div`
    text-align: center;
    margin-top: 3rem;
`

export default function Rodape() {

    return (
        <SecaoRodape>
            <SecaoRodapeContainer>
                <div>
                    <h2>Auto Mecânica Premium</h2>
                    <p>Cuidando do seu veículo há mais de 15 anos com qualidade e confiança.</p>
                </div>
                <div>
                    <h2>Serviços</h2>
                    <p>Manutenção Preventiva</p>
                    <p>Diagnóstico Eletrônico</p>
                    <p>Sistema Elétrico</p>
                    <p>Freios e Suspensão</p>
                </div>
                <div>
                    <h2>Contato</h2>
                    <p>(11) 91234-5678</p>
                    <p>contato@automecanica.com.br</p>
                    <p>Seg-Sex: 8h às 18h</p>
                    <p>Sáb: 8h às 13h</p>
                </div>
                <div>
                    <h2>Localização</h2>
                    <p>Av. dos Mecânicos, 1234</p>
                    <p>Centro - São Paulo, SP</p>
                    <p>CEP: 01234-567</p>
                </div>
            </SecaoRodapeContainer>

            <SecaoRodapedireitos>
                <p>© 2025 Auto Mecânica. Todos os direitos reservados.</p>
            </SecaoRodapedireitos>
        </SecaoRodape>
    )
}