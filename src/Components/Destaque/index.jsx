import styled from "styled-components";

import { FaCheck } from "react-icons/fa6";
import { BsSpeedometer2 } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { CgEditBlackPoint } from "react-icons/cg";

import mecanicosComputador from "./assets/mecanico-computador.jpg"
import mecanicoMotor from "./assets/motor-perto.jpg"
import mecanicoFreio from "./assets/freio.jpg"

const SecaoDestaque = styled.section`
    padding: 4rem 6rem;
    background-color: #f5f5f5;

    h1 {
        text-align: center;
        font-size: 3.5rem;
    }
`
const SecaoDestaqueParagrafo = styled.p`
    text-align: center;
    font-size: 1.4rem;
    color: #505050ff;
`
const SecaoDestaqueContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
`
const SecaoDestaqueContainerCaixa = styled.div`
    width: 30%;
    border: 1px solid gray;
    border-radius: 15px; 

    img {
        width: 100%;
        border-radius: 15px 15px 0 0;
        
    }

    &:hover .destaque-icone-img{
        transition: all 0.5s ease;  
        transform: scale(1.2);
    }
`
const SecaoDestaqueContainerCaixaCima = styled.div`
    position: relative;
    display: inline-block;

        img {
            display: block;
            width: 100%;
            height: auto;
        }

        &::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
            to top,
            rgba(255,255,255,0.9),
            transparent 100%
        );
    }

`

const SecaoDestaqueContainerCaixaBaixo = styled.div`
    padding: 1.5rem;

    h2 {
        font-weight: bold;
    }

    div {
        margin-top: 2rem;  

        p {
            display: flex;
            align-item: center;
            gap: .7rem;
            color: #262626;
            margin-top: .6rem;
        }
    }
`
const SecaoDestaqueContainerCaixaBaixoParagrafo = styled.p`
    font-size: 1.1rem;
    color: #505050ff;
    margin: 1rem 0;
`

export default function Destaque() {
    return (
        <SecaoDestaque>
            <h1>Serviços em Destaque</h1>
            <SecaoDestaqueParagrafo>Conheça nossos principais serviços com mais detalhes</SecaoDestaqueParagrafo>
            <SecaoDestaqueContainer>
                <SecaoDestaqueContainerCaixa>
                    <SecaoDestaqueContainerCaixaCima>
                        <img src={mecanicosComputador} alt="" />
                        <BsSpeedometer2 className="destaque-icone-img"/>
                    </SecaoDestaqueContainerCaixaCima>
                    
                    <SecaoDestaqueContainerCaixaBaixo>
                        <h2>Diagnóstico Computadorizado</h2>
                        <SecaoDestaqueContainerCaixaBaixoParagrafo>Utilizamos equipamentos de última geração para identificar qualquer problema no seu veículo com precisão cirúrgica.</SecaoDestaqueContainerCaixaBaixoParagrafo>
                        <div>
                            <p><FaCheck  className="destaque-icone"/>Scanner automotivo de última geração</p>
                            <p><FaCheck  className="destaque-icone"/>Análise completa de todos os sistemas eletrônicos</p>
                            <p><FaCheck  className="destaque-icone"/>Relatório detalhado dos códigos de erro</p>
                            <p><FaCheck  className="destaque-icone"/>Interpretação técnica e sugestões de reparo</p>
                        </div>
                    </SecaoDestaqueContainerCaixaBaixo>
                </SecaoDestaqueContainerCaixa>

                <SecaoDestaqueContainerCaixa>
                    <SecaoDestaqueContainerCaixaCima>
                        <img src={mecanicoMotor} alt="" />
                        <GoGear className="destaque-icone-img"/>
                    </SecaoDestaqueContainerCaixaCima>
                    
                    <SecaoDestaqueContainerCaixaBaixo>
                        <h2>Manutenção de Motor</h2>
                        <SecaoDestaqueContainerCaixaBaixoParagrafo>Serviços especializados para manter o coração do seu veículo funcionando perfeitamente.</SecaoDestaqueContainerCaixaBaixoParagrafo>
                        <div>
                            <p><FaCheck  className="destaque-icone"/>Troca de óleo e filtros com produtos premium</p>
                            <p><FaCheck  className="destaque-icone"/>Limpeza do sistema de injeção</p>
                            <p><FaCheck  className="destaque-icone"/>Regulagem de válvulas e sincronismo</p>
                            <p><FaCheck  className="destaque-icone"/>Substituição de correia dentada e acessórios</p>
                        </div>
                    </SecaoDestaqueContainerCaixaBaixo>
                </SecaoDestaqueContainerCaixa>

                <SecaoDestaqueContainerCaixa>
                    <SecaoDestaqueContainerCaixaCima>
                        <img src={mecanicoFreio} alt="" />
                        <CgEditBlackPoint className="destaque-icone-img"/>
                    </SecaoDestaqueContainerCaixaCima>
                    
                    <SecaoDestaqueContainerCaixaBaixo>
                        <h2>Sistema de Freios</h2>
                        <SecaoDestaqueContainerCaixaBaixoParagrafo>Sua segurança é nossa prioridade. Cuidamos de todo o sistema de frenagem.</SecaoDestaqueContainerCaixaBaixoParagrafo>
                        <div>
                            <p><FaCheck  className="destaque-icone"/>Inspeção completa de discos e pastilhas</p>
                            <p><FaCheck  className="destaque-icone"/>Troca de fluido de freio</p>
                            <p><FaCheck  className="destaque-icone"/>Manutenção de freio ABS</p>
                            <p><FaCheck  className="destaque-icone"/>Revisão do freio de mão</p>
                        </div>
                    </SecaoDestaqueContainerCaixaBaixo>
                </SecaoDestaqueContainerCaixa>  
            </SecaoDestaqueContainer>
        </SecaoDestaque>
    )
}