import styled from "styled-components";

import equipe from "./assets/equipe.jpg"

import { SlEnergy } from "react-icons/sl";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdOutlineShield } from "react-icons/md";
import { PiMedalLight } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";

const SecaoQualidade = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5rem 6rem;
    gap: 4rem;
    margin-top: 2rem;

    h1 {
        font-size: 3rem;
    }
`
const SecaoQualidadeParagrafoUm = styled.p`
    font-size: 1.4rem;
    color: #505050ff;
    margin: 1.3rem 0;
`

const SecaoQualidadeCaixa = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;

    div {
        width: 48%;
    }

    span {
        font-size: 2.5rem;
        font-weight: bold;
        color: #222177;
    }

    p {
        color: #222177;
    }
`
const SecaoQualidadeDireita = styled.section`


    img {
        width: 100%;
        border-radius: 15px;
    }
`
const SecaoQualidadeDireitaBaixo = styled.div`
    background: linear-gradient(145deg, #222177, #fff);
    color: #fff;
    padding: 2rem;
    border-radius: 15px;
    margin-top: 1rem;

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
    }

    p {
        display: flex;
        align-items: center;
        margin: 1rem 0;
        gap: 1rem;
    }
`

export default function Qualidade() {
    return (
        <SecaoQualidade id="qualidade">
            <section>
                <h1>Qualidade, Confiança e Transparência</h1>
                <SecaoQualidadeParagrafoUm>Somos uma oficina especializada com mais de 15 anos de experiência no mercado automotivo. Nossa equipe de profissionais qualificados e certificados utiliza equipamentos de última geração para garantir o melhor serviço para o seu veículo.</SecaoQualidadeParagrafoUm>
                <SecaoQualidadeParagrafoUm>Trabalhamos com total transparência e honestidade, oferecendo orçamentos detalhados antes de qualquer serviço e garantia em todos os trabalhos realizados. Acreditamos que a confiança é construída através de um serviço de excelência e relacionamento duradouro com nossos clientes.</SecaoQualidadeParagrafoUm>
                <SecaoQualidadeCaixa>
                    <div>
                        <span>15+</span>
                        <p>Anos de Experiência</p>
                    </div>
                    <div>
                        <span>5000+</span>
                        <p>Clientes Atendidos</p>
                    </div>
                    <div>
                        <span>98%</span>
                        <p>Taxa de Satisfação</p>
                    </div>
                    <div>
                        <span>24h</span>
                        <p>Suporte Emergencial</p>
                    </div>
                </SecaoQualidadeCaixa>
            </section>

            <SecaoQualidadeDireita>
                <div>
                    <img src={equipe} alt="" />
                </div>
                <SecaoQualidadeDireitaBaixo>
                    <h2>Por que escolher nossa oficina?</h2>
                    <p><BsHandThumbsUp className="qualidade-icone"/>Equipe técnica especializada e certificada com treinamento contínuo</p>
                    <p><SlEnergy className="qualidade-icone"/>Equipamentos modernos de diagnóstico e manutenção</p>
                    <p><MdOutlineShield className="qualidade-icone"/>Peças originais e de qualidade com garantia do fabricante</p>
                    <p><PiMedalLight className="qualidade-icone"/>Garantia de 90 dias em todos os serviços realizados</p>
                    <p><IoDocumentTextOutline className="qualidade-icone"/>Orçamento detalhado e transparente sem surpresas</p>
                </SecaoQualidadeDireitaBaixo>
            </SecaoQualidadeDireita>
        </SecaoQualidade>
    )

}