import styled from "styled-components";

import { useState } from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";

const SecaoPerguntas = styled.section`
    padding: 4rem 6rem;
    background-color: #f5f5f5;

    h1 {
        text-align: center;
        font-size: 3.5rem;
    }
`
const SecaoPerguntasParagrafo = styled.p`
    text-align: center;
    font-size: 1.5rem;
    margin: .6rem 0 4rem 0;
    color: #505050ff;
`
const SecaoPerguntasContainer = styled.div`
`
const SecaoPerguntasContainerCaixa = styled.div`
    border: 1px solid #b3b3b3;
        border-radius: 10px;
        padding: 1rem 1.7rem;
        width: 70%;
        margin: 0 auto 1rem auto;
        
        div {
            display: flex;
            justify-content: space-between;
            padding: .7rem 1rem;
        }

        h3 {
            color: #404040;
        }

        p {
            padding: 0 1rem;
        }

`
const SecaoPerguntasContainerCaixaCima = styled.div`
    padding: .7rem;
`
const SecaoPerguntasContainerCaixaBaixo = styled.div`
    padding: 0 .7rem;
`


export default function Perguntas() {
    const [abertoId, setAbertoId] = useState(null);

    const perguntas = [
        {
            titulo: 'Com que frequência devo fazer a manutenção preventiva?',
            resposta:
                'Recomendamos fazer a manutenção preventiva a cada 10.000 km ou 6 meses, o que ocorrer primeiro. Isso inclui troca de óleo, filtros e verificação geral dos sistemas do veículo.'
        },
        {
            titulo: 'Vocês trabalham com todas as marcas de veículos?',
            resposta:
                'Sim, nossa oficina está equipada e preparada para atender todas as marcas e modelos de veículos, sejam nacionais ou importados. Nossa equipe tem experiência com diversos fabricantes.'
        },
        {
            titulo: 'Quanto tempo demora um serviço de manutenção?',
            resposta:
                'O tempo varia conforme o serviço. Uma troca de óleo simples leva cerca de 30-45 minutos. Serviços mais complexos podem levar de algumas horas a dias. Sempre informamos o prazo estimado no orçamento.'
        }
        ,
        {
            titulo: 'Vocês oferecem garantia nos serviços?',
            resposta:
                'Sim, todos os nossos serviços possuem garantia de 90 dias. Trabalhamos apenas com peças de qualidade e oferecemos garantia tanto dos serviços quanto das peças instaladas.'
        },
        {
            titulo: 'É necessário agendar horário?',
            resposta:
                'Embora atendamos clientes sem agendamento, recomendamos marcar horário para garantir um atendimento mais rápido e evitar espera. Entre em contato pelos nossos canais para agendar.'
        }
        ,
        {
            titulo: 'Quais formas de pagamentos são aceitas?',
            resposta:
                'Aceitamos diversas formas de pagamento: dinheiro, cartão de crédito e débito (todas as bandeiras), PIX e parcelamento em até 6x sem juros no cartão de crédito.'
        }
    ]


    return (
        <SecaoPerguntas>
            <h1>Perguntas Frequentes</h1>
            <SecaoPerguntasParagrafo>Tire suas dúvidas sobre nossos serviços</SecaoPerguntasParagrafo>
            <SecaoPerguntasContainer>

                {perguntas.map((item, index) => (
                    <SecaoPerguntasContainerCaixa key={index}>
                        <div
                            className={`icone-wrapper ${abertoId === index ? 'ativo' : ''}`}
                            onClick={() =>
                                setAbertoId(abertoId === index ? null : index)
                            }
                        >
                            <h3>{item.titulo}</h3>
                            <IoIosArrowDown className="icone" />
                        </div>

                        <p className={`texto ${abertoId === index ? 'ativo' : ''}`}>
                            {item.resposta}
                        </p>
                    </SecaoPerguntasContainerCaixa>
                ))}

            </SecaoPerguntasContainer>
        </SecaoPerguntas>
    )
}