import styled from "styled-components";

import { LuWrench, LuCar   } from "react-icons/lu";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoBatteryDead } from "react-icons/io5";
import { CgEditBlackPoint } from "react-icons/cg";
import { GoGear } from "react-icons/go";

const SecaoServicos = styled.section`
    text-align: center;
    padding: 3.5rem 6rem;
    background-color: #f5f5f5;

    h1 {
        font-size: 3.5rem;
    }
`
const SecaoServicosParagrafo = styled.p`
    font-size: 1.5rem;
    color: #505050ff;
    margin-bottom: 4rem;
`

const SecaoServicosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    div {
        width: 30%;
        border: 1px solid rgb(184, 222, 255);
        border-radius: 20px;
        padding: 1.3rem 2rem;

        h3 {
            font-size: 1.4rem;
            margin: 1rem 0;
        }

        p {
            color: #505050ff;
            font-size: 1.3rem;
        }

        &:hover {
            border: 1px solid blue;
            transition: all 0.5s ease; 
            box-shadow: 0 0 10px 0 #d9d9d9;
        }

        &:hover .servicos-icone {
            background-color: #002080;
            transition: all 0.5s ease; 
            color: #fff;
        }
    }
`


export default function Servicos() {
    return(
        <SecaoServicos>
            <h1>Nossos Serviços</h1>
            <SecaoServicosParagrafo>Soluções completas para todas as necessidades do seu veículo</SecaoServicosParagrafo>
            <SecaoServicosContainer>
                <div>
                    <LuWrench className="servicos-icone"/>
                    <h3>Manutenção Preventiva</h3>
                    <p>Revisões completas para manter seu veículo em perfeito estado</p>
                </div>
                <div>
                    <BsSpeedometer2 className="servicos-icone"/>
                    <h3>Diagnóstico Eletrônico</h3>
                    <p>Equipamentos modernos para identificar problemas com precisão</p>
                </div>
                <div>
                    <IoBatteryDead className="servicos-icone"/>
                    <h3>Sistema Elétrico</h3>
                    <p>Reparos em bateria, alternador e todo sistema elétrico</p>
                </div>
                <div>
                    <CgEditBlackPoint className="servicos-icone"/>
                    <h3>Freios e Suspensão</h3>
                    <p>Manutenção completa para sua segurança nas estradas</p>
                </div>
                <div>
                    <GoGear className="servicos-icone"/>
                    <h3>Motor</h3>
                    <p>Reparos e manutenção especializada em motores</p>
                </div>
                <div>
                    <LuCar className="servicos-icone"/>
                    <h3>Ar Condicionado</h3>
                    <p>Limpeza, recarga e reparos do sistema de climatização</p>
                </div>
            </SecaoServicosContainer>
        </SecaoServicos>
    )
}