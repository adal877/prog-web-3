import React from "react";
import Card from "../components/Card";
import Header from "../components/header";
import Footer from "../components/Footer";

class Home extends React.Component {
    render() {
        return (
            <div id="Home_page">
                <Header title="Avaliação P3"></Header>
                <div className="home-middle-container">
                    <div className="card card-1">
                        <Card
                            img="img/melhor_prof_ever.jpg"
                            img_alt="Imagem de perfil Professor Douglas"
                            link_class="button-linkedin"
                            link_href="https://linkedin.com/in/douglas-roberto-rosa-pereira-19808a175"
                            link_title="linkedin"
                            title="Douglas Roberto Rosa Pereira"
                            description="Auxiliar de docente na Fatec Mogi Mirim - 'Arthur de Azevedo'"
                        >
                        </Card>
                    </div>
                    <div className="card card-2">
                        <Card
                            img="img/monza.webp"
                            img_alt="Imagem de um Monza"
                            description="Namore um cara que goste de carros. Eles quebram partes do carro, mas jamais seu coração. -- Desconhecido."
                        >
                        </Card>
                    </div>

                </div>
                <Footer title="By adal877"></Footer>
            </div>
        );
    }
}

export default Home;
