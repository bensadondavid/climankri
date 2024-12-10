import React, { useEffect, useState } from "react";

const Temoignages = () => {

  const testimonies = [
    {
      name: "Ruthy Illouz",
      location: "Paris",
      text: "Je recommande de se faire accompagner pour votre alya par MayHelp. J’ai été impressionné par le sérieux et l’investissement ! J’ai été aidé pour toutes mes démarches, que ce soit pour trouver mon école ou pour mes rendez-vous (ma teoudat zehout, l’ouverture de mon compte bancaire…). Un immense merci, grâce à vous, mon alya s’est faite de façon beaucoup plus sereine et organisée !!"
    },
    {
      name: "Yossef Nabet",
      location: "Jerusalem",
      text: "Yehouda est hyper efficace. Il comprend vite le problème et le traite jusqu’au bout. Il est juste parfait pour parler aux interlocuteurs israéliens. Il ne lâche rien et obtient ce qu’il veut ! Il a un très grand sens du devoir et du service."
    },
    {
      name: "Hai Moshé A.",
      location: "USA",
      text: "MayHelp a été d’une aide précieuse pour mon inscription à l’université. Étant à l’étranger, ils ont pris en charge toutes les démarches nécessaires, rendant le processus simple et fluide. Leur professionnalisme et leur capacité d’écoute m’ont particulièrement impressionné. Je recommande vivement leurs services. Merci beaucoup à toute l’équipe ! ",
    },
    {
      name: "Alex H.",
      location: "Jerusalem",
      text: "Merci à MayHelp qui nous a permis de passer ce cap en toute efficacité  Entre les relevés des compteurs , suivi des dossiers gaz, eau, éléctricté, nos demarches en ont été grandement facilitées."
    },
    {
      name: "Brigitte Mekies",
      location: "Jerusalem",
      text: "Un grand merci pour votre dévouement, votre disponibilité et votre efficacité. Je suis enthousiaste à l’idée de poursuivre notre collaboration avec la même fluidité et simplicité.",
    },
    {
      name: "Haya Chelli",
      location: "Jerusalem",
      text: "J'ai fait appel à Yehouda pour un problème avec le bitouah leoumi et il a été très efficace. Il est très réactif et va au bout des choses. Je recommande fortement.",
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
          <path fill="#003366" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          <path fill="#003366" d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2l-2.81 6.63L26 9.24l5.46 4.73L29.82 21z"/>
          <path fill="#003366" d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2l-2.81 6.63L50 9.24l5.46 4.73L53.82 21z"/>
          <path fill="#003366" d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2l-2.81 6.63L74 9.24l5.46 4.73L77.82 21z"/>
          <path fill="#003366" d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2l-2.81 6.63L98 9.24l5.46 4.73L101.82 21z"/>
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