import styled from "styled-components";

import { LuClipboardCheck, LuWrench } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";


const SecaoProcesso = styled.section`
    padding: 3rem 6rem;
    text-align: center;

    h1 {
        font-size: 3.5rem;
    }
`
const SecaoProcessoParagrafo = styled.p`
    font-size: 1.5rem;
    color: #505050ff;
`
const SecaoProcessoContainer = styled.div`
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    gap: 2rem;

    div {
        width: 22%;
        position: relative;
        padding: 1rem;
        

        span{
            background-color: orange;
            border-radius: 50%;
            font-size: 1.1rem;  
            padding: .6rem 1rem;
            color: #fff;
            font-weight: bold;
            position: absolute;
            top: -6%;
            right: 0;
        }

        h3 {
            font-size: 1.3rem;
            margin: 1rem 0;
        }

        p {
            color: #505050ff;  
            font-size: 1.1rem; 
        }
    }
`

export default function Processo () {
    return(
        <SecaoProcesso id="processo">
            <h1>Nosso Processo</h1>
            <SecaoProcessoParagrafo>Passo a passo de como cuidamos do seu veículo com excelência</SecaoProcessoParagrafo>

            <SecaoProcessoContainer>
                <div>
                    <span>1</span>
                    <LuClipboardCheck className="processo-icone"/>
                    <h3>Agendamento</h3>
                    <p>Entre em contato e agende um horário que seja conveniente para você</p>
                </div>

                <div>
                    <span>2</span>
                    <IoDocumentTextOutline  className="processo-icone"/>
                    <h3>Diagnóstico</h3>
                    <p>Nossa equipe realiza uma inspeção completa e detalhada do veículo</p>
                </div>

                <div>
                    <span>3</span>
                    <LuWrench className="processo-icone"/>
                    <h3>Reparo</h3>
                    <p>Executamos os serviços com precisão usando peças de qualidade</p>
                </div>

                <div>
                    <span>4</span>
                    <FaRegCircleCheck  className="processo-icone"/>
                    <h3>Entrega</h3>
                    <p>Seu veículo é testado e entregue com garantia de qualidade</p>
                </div>
            </SecaoProcessoContainer>
        </SecaoProcesso>
    )
}