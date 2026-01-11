import styled from "styled-components";

import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

import ferramentas from "./assets/ferramentas.jpg"

const SecaoContato = styled.section`
    padding: 4rem 0;

    h1 {
        text-align: center;
        font-size: 3.5rem;
    }
`
const SecaoContatoParagrafo = styled.p`
    text-align: center;
    font-size: 1.4rem;
    color: #737373;
`
const SecaoContatoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    padding: 4rem 5rem;
`
const SecaoContatoContainerCaixa = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.2rem;
    
    div {


        h3 {
            color: #333333;
        }

        p {
            color: #737373;
            font-size: 1.2rem;
            margin-top: .2rem;
        }
    }
`
const SecaoContatoFormulario = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 3px 0 #737373;
    border-radius: 20px;
    padding: 2rem;

        h2 {
            font-size: 1.7rem;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: .7rem;
            padding: 1rem 0;

            input, select, textarea, a {
                padding: .9rem;
                border-radius: 10px;
                border: 1px solid rgba(120, 120, 120, 0.3);
                width: 95%;
                margin-left: .5rem;
            }

            select {
                font-size: 1.1rem;
            }

            option {
            font-size: 1.1rem;
            }

            textarea {
                height: 10rem;
            }

            a {
                background-color: #ff751a;
                text-decoration: none;
                color: #fff;
                font-size: 1.2rem;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                margin-top: 1.4rem;

                &:hover {
                    box-shadow: 0 0 20px 0 #f5972bff;
                }
            }
        }
`
const SecaoContatoImagem = styled.img`
    width: 100%;
    padding: 2rem 1.5rem;
    border-radius: 50px;
    height: 400px;
    object-fit: cover;
`

export default function Contato() {
    return (
        <SecaoContato>
            <h1>Entre em Contato</h1>
            <SecaoContatoParagrafo>Estamos prontos para cuidar do seu veículo</SecaoContatoParagrafo>

            <SecaoContatoContainer>
                <div>
                    <SecaoContatoContainerCaixa>
                        <IoLocationOutline className="contato-icone" />
                        <div>
                            <h3>Endereço</h3>
                            <p>Av. dos Mecânicos, 1234 - Centro</p>
                            <p>São Paulo, SP - CEP: 01234-567</p>
                        </div>
                    </SecaoContatoContainerCaixa>

                    <SecaoContatoContainerCaixa>
                        <div className="icone-telefone">
                            <FiPhone className="contato-icone-telefone" />
                        </div>

                        <div>
                            <h3>Telefone e WhatsApp</h3>
                            <p>(11) 91234-5678</p>
                            <p>(11) 3456-7890</p>
                        </div>
                    </SecaoContatoContainerCaixa>

                    <SecaoContatoContainerCaixa>
                        <MdOutlineEmail className="contato-icone" />
                        <div>
                            <h3>Email</h3>
                            <p>contato@automecanica.com.br</p>
                            <p>orcamento@automecanica.com.br</p>
                        </div>
                    </SecaoContatoContainerCaixa>

                    <SecaoContatoContainerCaixa>
                        <IoMdTime className="contato-icone" />
                        <div>
                            <h3>Horário de Funcionamento</h3>
                            <p>Segunda a Sexta: 8h às 18h</p>
                            <p>Sábado: 8h às 13h</p>
                            <p>Domingos e Feriados: Fechado</p>
                        </div>
                    </SecaoContatoContainerCaixa>

                    <SecaoContatoImagem src={ferramentas} alt="" />

                </div>

                <SecaoContatoFormulario>
                    <h2>Solicite um Orçamento</h2>
                    <form action="">
                        <label htmlFor="">Nome Completo</label>
                        <input type="text" name="" id="" placeholder="Seu Nome Completo" />

                        <label htmlFor="">Email</label>
                        <input type="text" name="" id="" placeholder="seu email@.com" />

                        <label htmlFor="">Telefone / WhatsApp</label>
                        <input type="text" name="" id="" placeholder="(11) 91234-5678" />

                        <label htmlFor="">Veículo</label>
                        <input type="text" name="" id="" placeholder="Marca, Modelo e Ano" />

                        <label htmlFor="">Serviço Desejado</label>
                        <select name="" id="">
                            <option value="">Selecione um serviço</option>
                            <option value="">Manutenção Preventiva</option>
                            <option value="">Diagnóstico Eletrônico</option>
                            <option value="">Sistema Elétrico</option>
                            <option value="">Freio e Sespenção</option>
                            <option value="">Motor</option>
                            <option value="">Ar Condicionado</option>
                            <option value="">Outro</option>
                        </select>
                        <textarea name="" id="" placeholder="Descreva o problema ou serviço desejado em detalhes"></textarea>
                        <a href=""><MdOutlineEmail />Enviar Solicitação</a>
                    </form>
                </SecaoContatoFormulario>
            </SecaoContatoContainer>
        </SecaoContato>
    )
}