import styled from "styled-components";

import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import mecanicosUm from "./assets/mecanicosUm.jpg"
import mecanicosDois from "./assets/mecanicosDois.jpg"
import mecanicosTres from "./assets/mecanicosTres.jpg"

import { LuPhone } from "react-icons/lu";
import { MdOutlineShield, MdPeopleAlt } from "react-icons/md";
import { PiMedalLight } from "react-icons/pi";

const SecaoTopo = styled.section`
    
`
const SecaoTopoConteudoUm = styled.div`
    background-image: url(${mecanicosUm});
    height: 110vh;
    background-size: cover;
`
const SecaoTopoConteudoDois = styled.div`
    background-image: url(${mecanicosDois});
    height: 110vh;
    background-size: cover;
`
const SecaoTopoConteudoTres = styled.div`
    background-image: url(${mecanicosTres});
    height: 110vh;
    background-size: cover;
`
const SecaoTopoConteudoUmContainer = styled.div`
    background: linear-gradient(85deg, #e3e2e7ff, #dfdfdf63);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 6rem;

        h1 {
            font-size: 4.5rem;
            width: 60%;
            margin-top: 50px;
        }

        p {
            font-size: 1.7rem;
            width: 55%;
            color: #4b4b4bff;
            margin-top: 2rem;
        }
`

const SecaoTopoConteudoUmContainerBotoes = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 3rem;

    a {
        width: fit-content;
        text-decoration: none;
        padding: .7rem 2rem;
        border-radius: 10px;
        font-size: 1.3rem;
        font-weight: bold;
    }
`

const TopoBtnUm = styled.a`
    background-color: #f5972bff;
    color: #fff;
    padding: .7rem 2rem;
    border-radius: 10px;
    display: flex;
    gap: .7rem;
    align-items: center;

    &:hover {
        box-shadow: 0 0 20px 0 #f5972bff;
    }
`
const TopoBtnDois = styled.a`
    color: #383838ff;
    background-color: #ffffffff;

    &:hover {
        background-color: #f5972bff;
        color: #fff;
    }
`
const SecaoTopoConteudoUmContainerBaixo = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 4rem;

        span {
            display: flex;
            gap: .5rem;
            align-items: center;
        }
`

export default function Topo() {
    const [ready, setReady] = useState(false)

    return (
        <SecaoTopo id="inicio">
            <Swiper
                modules={[
                    Navigation,
                    Pagination,
                    Autoplay,
                    EffectFade,
                ]}
                slidesPerView={1}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1000}
                loop
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                onSwiper={() => setReady(true)}
                className={ready ? 'swiper-ready' : 'swiper-loading'}

            >
                <SwiperSlide>
                    <SecaoTopoConteudoUm>
                        <SecaoTopoConteudoUmContainer>
                            <h1>Cuidado Premium para o Seu Veículo</h1>
                            <p>Oficina especializada em manutenção preventiva e corretiva com equipamentos de última geração e equipe altamente qualificada</p>
                            <SecaoTopoConteudoUmContainerBotoes>
                                <TopoBtnUm href="https://api.whatsapp.com/send?phone=13935019293" target="_blank"><LuPhone />Agendar Serviço</TopoBtnUm>
                                <TopoBtnDois href="#servicos">Nossos Serviços</TopoBtnDois>
                            </SecaoTopoConteudoUmContainerBotoes>

                            <SecaoTopoConteudoUmContainerBaixo>
                                <span><MdOutlineShield className="icone-topo" />Garantia de 90 dias</span>
                                <span><PiMedalLight className="icone-topo" />Certificação ISO</span>
                                <span><MdPeopleAlt className="icone-topo" />5000+ clientes</span>
                            </SecaoTopoConteudoUmContainerBaixo>

                        </SecaoTopoConteudoUmContainer>
                    </SecaoTopoConteudoUm>
                </SwiperSlide>

                <SwiperSlide>
                    <SecaoTopoConteudoDois>
                        <SecaoTopoConteudoUmContainer>
                            <h1>Diagnóstico Computadorizado Avançado</h1>
                            <p>Equipamentos modernos para identificar e solucionar problemas do seu veículo com precisão e rapidez</p>
                            <SecaoTopoConteudoUmContainerBotoes>
                                <TopoBtnUm href="https://api.whatsapp.com/send?phone=13935019293" target="_blank"><LuPhone />Agendar Diagnostico</TopoBtnUm>
                                <TopoBtnDois href="#destaque">Saiba Mais</TopoBtnDois>
                            </SecaoTopoConteudoUmContainerBotoes>

                            <SecaoTopoConteudoUmContainerBaixo>
                                <span><MdOutlineShield className="icone-topo" />Garantia de 90 dias</span>
                                <span><PiMedalLight className="icone-topo" />Certificação ISO</span>
                                <span><MdPeopleAlt className="icone-topo" />5000+ clientes</span>
                            </SecaoTopoConteudoUmContainerBaixo>

                        </SecaoTopoConteudoUmContainer>
                    </SecaoTopoConteudoDois>
                </SwiperSlide>

                <SwiperSlide>
                    <SecaoTopoConteudoTres>
                        <SecaoTopoConteudoUmContainer>
                            <h1>Manutenção e Reparo de Motor</h1>
                            <p>Equipe técnica especializada em manutenção preventiva e corretiva de motores de todas as marcas</p>
                            <SecaoTopoConteudoUmContainerBotoes>
                                <TopoBtnUm href="https://api.whatsapp.com/send?phone=13935019293" target="_blank"><LuPhone />Solicitar Orçamento</TopoBtnUm>
                                <TopoBtnDois href="#servicos">Ver Serviços</TopoBtnDois>
                            </SecaoTopoConteudoUmContainerBotoes>

                            <SecaoTopoConteudoUmContainerBaixo>
                                <span><MdOutlineShield className="icone-topo" />Garantia de 90 dias</span>
                                <span><PiMedalLight className="icone-topo" />Certificação ISO</span>
                                <span><MdPeopleAlt className="icone-topo" />5000+ clientes</span>
                            </SecaoTopoConteudoUmContainerBaixo>

                        </SecaoTopoConteudoUmContainer>
                    </SecaoTopoConteudoTres>
                </SwiperSlide>
            </Swiper>
        </SecaoTopo>
    )
}