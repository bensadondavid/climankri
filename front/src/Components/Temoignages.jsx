import React, { useEffect, useState } from "react";

const Temoignages = () => {

  const testimonies = [
    {
      name: "Claire Morel",
      location: "Paris",
      text: "Climankri a installé une pompe à chaleur dans notre appartement parisien, et le résultat est impeccable ! L'équipe est professionnelle, rapide et très attentionnée. Nous sommes ravis du confort obtenu et des économies réalisées. Je recommande vivement !"
    },
    {
      name: "Antoine Dupuis",
      location: "Lyon",
      text: "Un immense merci à Climankri pour l'installation de notre climatisation. Ils ont respecté les délais, étaient super disponibles et ont répondu à toutes nos questions. Notre maison à Lyon est maintenant parfaitement climatisée, même en plein été !"
    },
    {
      name: "Sophie Laurent",
      location: "Marseille",
      text: "Je suis extrêmement satisfaite du service de Climankri. Ils ont rénové notre système de chauffage central à Marseille, et tout fonctionne à merveille. Le professionnalisme de l'équipe est remarquable. Bravo !"
    },
    {
      name: "Jean Dufour",
      location: "Bordeaux",
      text: "Climankri a pris en charge toutes les réparations de plomberie pour notre maison. Entre les fuites réparées et le suivi constant, nous sommes vraiment tranquilles. Ils sont très réactifs et fiables. Merci beaucoup !"
    },
    {
      name: "Marie Fontaine",
      location: "Nantes",
      text: "Un grand merci à Climankri pour leur aide avec notre chaudière en plein hiver. À Nantes, nous avons eu un problème urgent, et leur équipe est intervenue rapidement avec une solution efficace. Excellent service !"
    },
    {
      name: "Pauline Lemoine",
      location: "Toulouse",
      text: "Je recommande Climankri sans hésitation ! Ils nous ont guidés pour choisir une pompe à chaleur adaptée à notre maison à Toulouse, et l'installation a été parfaite. Un service client exceptionnel."
    }
];


  const [index, setIndex] = useState(0);

  const PreviousItem = () => {
    setIndex(previousIndex => (previousIndex === 0 ? testimonies.length - 1 : previousIndex - 1));
  };

  const NextItem = () => {
    setIndex(previousIndex => (previousIndex === testimonies.length - 1 ? 0 : previousIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      NextItem();
    }, 10000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <div className="testimonies-container">
      <div className="testimonies-elements" key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 24" width="120" height="24">
          <path fill="#fff" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          <path fill="#fff" d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2l-2.81 6.63L26 9.24l5.46 4.73L29.82 21z"/>
          <path fill="#fff" d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2l-2.81 6.63L50 9.24l5.46 4.73L53.82 21z"/>
          <path fill="#fff" d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2l-2.81 6.63L74 9.24l5.46 4.73L77.82 21z"/>
          <path fill="#fff" d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2l-2.81 6.63L98 9.24l5.46 4.73L101.82 21z"/>
          <path d="M0 0h120v24H0z" fill="none"/>
        </svg>
        <p>{testimonies[index].text}</p>
        <p className="testimonie-name">{testimonies[index].name}, {testimonies[index].location}</p>
        <button className="previous-button" onClick={PreviousItem}> &lt; </button>
        <button className="next-button" onClick={NextItem}>&gt;</button>
      </div>
    </div>
    </>
  );
};

export default Temoignages;