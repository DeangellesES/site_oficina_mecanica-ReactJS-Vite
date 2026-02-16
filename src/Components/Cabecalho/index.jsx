import { LuWrench, LuPhone } from "react-icons/lu";

import styled from "styled-components";

import { useEffect, useState } from 'react'

const SecaoCabecalho = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 6rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 1000;
    background-color: transparent;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    
    nav {
        display: flex;
        gap: 1.3rem;

            a {
                font-weight: bold;
                color: rgb(54, 54, 54);
                text-decoration: none;
                padding: .5rem;
                border-radius: 10px;

                    &:hover {
                        background-color: rgba(241, 170, 88, 0.493);
                    }
            }
           
    }

`

const SecaoCabecalhoTitulo = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

    div {

        h1 {
            font-size: 1.5rem;
        }

        p {
            color: rgb(104, 104, 104);
        }
    }

`
const SecaoCabecalhoBtn = styled.a`
    background-color: rgb(18, 20, 107);
    padding: .7rem 1rem;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: .4rem;
    border-radius: 10px;
    font-weight: bold;

        &:hover {
            background-color: rgb(39, 41, 124);
        }
`

export default function Cabecalho() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <SecaoCabecalho className={`header ${scrolled ? 'scrolled' : ''}`}>
            <SecaoCabecalhoTitulo className="cabecalho-titulo">
                <LuWrench className="icone-titulo" />
                <div>
                    <h1>Auto Mecânica</h1>
                    <p>Premium</p>
                </div>
            </SecaoCabecalhoTitulo>

            <nav>

                <a href="#inicio">Início</a>
                <a href="#servicos">Serviços</a>
                <a href="#processo">Processo</a>
                <a href="#qualidade">Sobre Nós</a>
                <a href="#destaque">Galeria</a>
                <a href="#perguntas">FAQ</a>
                <a href="#contato">Contato</a>

            </nav>

            <SecaoCabecalhoBtn href="https://api.whatsapp.com/send?phone=13935019293"><LuPhone /> Agendar Serviço</SecaoCabecalhoBtn>
        </SecaoCabecalho>
    )
}