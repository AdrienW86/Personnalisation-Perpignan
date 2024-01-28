import Barboteuse from '@/assets/barboteuse.jpg'
import Barboteuse2 from '@/assets/barboteuse2.jpg'
import Barboteuse3 from '@/assets/barboteuse3.jpg'
import Barboteuse4 from '@/assets/barboteuse4.jpg'
import Barboteuse5 from '@/assets/barboteuse5.jpg'
import Barboteuse6 from '@/assets/barboteuse6.jpg'
import Barboteuse7 from '@/assets/barboteuse7.jpg'

import Welcome from '@/assets/welcome.jpg'
import Welcome2 from '@/assets/welcome2.jpg'
import Welcome3 from '@/assets/welcome3.jpg'
import Welcome4 from '@/assets/welcome4.jpg'

import Passport from '@/assets/passport.jpg'
import Passport2 from '@/assets/passport2.jpg'
import Passport3 from '@/assets/passport3.jpg'
import Passport4 from '@/assets/passport4.jpg'
import Passport5 from '@/assets/passport5.jpg'

import Coffret from '@/assets/coffret-islamique.jpg'
import Coffret2 from '@/assets/coffret-islamique2.jpg'
import Coffret3 from '@/assets/coffret-islamique3.jpg'

import Sommeil from '@/assets/sommeil.jpg'
import Sommeil2 from '@/assets/sommeil2.jpg'
import Sommeil3 from '@/assets/banner2.jpg'
import Sommeil4 from '@/assets/banner3.jpg'
import Sommeil5 from '@/assets/sommeil5.jpg'

import Couverture from '@/assets/couverture.jpg'

import Wallet from '@/assets/wallet.jpg'
import Wallet2 from '@/assets/wallet2.jpg'

import Rose from '@/assets/rose.jpg'

import Sac1 from '@/assets/sac1.jpg'
import Sac2 from '@/assets/sac2.jpg'
import Sac3 from '@/assets/sac3.jpg'
import Sac4 from '@/assets/sac4.jpg'

import Toile from '@/assets/toile.jpg'


import Doudou from '@/assets/doudou.jpg'
import Doudou2 from '@/assets/doudou2.jpg'
import Doudou3 from '@/assets/doudou3.jpg'

import Tapis from '@/assets/tapis.jpg'
import Tapis2 from '@/assets/tapis2.jpg'
import Tapis3 from '@/assets/tapis3.jpg'
import Tapis4 from '@/assets/tapis4.jpg'

import Panneau from '@/assets/panneau.jpg'

import { v4 as uuidv4 } from 'uuid';

export const data = {

  intro: " Explorez une sélection adorable de produits conçus spécialement pour les tout-petits nouveaux née, nous offrons des articles uniques qui créent des souvenirs durables. Ajoutez une touche personnelle en gravant le nom du bébé, une date spéciale ou un message tendre. Offrez des présents qui célèbrent l'arrivée d'un nouveau-né avec amour et originalité aussi Découvrez notre collection exceptionnelle de tapis de prière personnalisés, alliant élégance et spiritualité. Chaque tapis est méticuleusement conçu pour offrir un confort optimal lors de vos moments de prière.créer une expérience unique et personnelle. Découvrez nos options de personnalisation pour rendre chaque cadeau aussi spécial que le  trésor qui le recevra. Découvrez l'art de personnaliser les souvenirs et laissez-nous créer des expériences uniques pour vos proches. Personnalisez chaque coffret en ajoutant une touche personnelle, que ce soit par une gravure, un message spécial, ou en choisissant des options sur mesure. Découvrez le plaisir de donner avec une personnalisation exceptionnelle sur notre site.",
  products: [
    {
        id: uuidv4(),
        name: "Protège-passeport",
        price: 12.99,
        picture: Passport,
        url: "passport",
        color: "Blanc",
        options: [
            { img: Passport},
            { img: Passport2},
            { img: Passport3},
            { img: Passport4},
            { img: Passport5}
        ],     
    },
    {
        id: uuidv4(),
        name: "Coffret islamique",
        price: 38.99,
        picture: Coffret,
        url: "coffret",
        color: "Noir",
        options: [
            { img: Coffret},
            { img: Coffret2},
            { img: Coffret3},
        ],
    },
    {
        id: uuidv4(),
        name: "Sommeil velours",
        price: 34.99,
        picture: Sommeil,
        url: "sommeil",
        color: "Blanc",
        options: [
            { img: Sommeil},
            { img: Sommeil2},
            { img: Sommeil3},
            { img: Sommeil4},
            { img: Sommeil5},
        ],
    },
    {
        id: uuidv4(),
        name: "Ballon personnalisé",
        price: 38.99,
        picture: Welcome,
        url: "ballon",
        color: "Transparent",
        options: [
            { img: Welcome},
            { img: Welcome2},
            { img: Welcome3},
            { img: Welcome4}
        ],
    },
    {
        id: uuidv4(),
        name: "Set couverture",
        price: 34.99,
        picture: Couverture,
        url: "couverture",
        color: "Transparent",
        options: [
            { img: Couverture},
            { img: Couverture},
            { img: Welcome3},
            { img: Welcome4}
        ],
    },
    {
        id: uuidv4(),
        name: "Bouquet 10 roses personnalisé",
        price: 54.99,
        picture: Rose,
        url: "roses",
        color: "Rouge",
        options: [
            { img: Rose},           
        ],
    },
    {
        id: uuidv4(),
        name: "Sac en toile de jute",
        price: 15.99,
        picture: Toile,
        url: "sac",
        color: "Blanc",
        options: [
            { img: Toile},           
        ],
    },
    {
        id: uuidv4(),
        name: "Barboteuse",
        price: 29.99,
        picture: Barboteuse,
        url: "barboteuse",
        color: "Blanc",
        options: [
            { img: Barboteuse},  
            { img: Barboteuse2}, 
            { img: Barboteuse3}, 
            { img: Barboteuse4},
            { img: Barboteuse5},
            { img: Barboteuse6},
            { img: Barboteuse7},
        ],
    },
    {
        id: uuidv4(),
        name: "Panneau acrylique",
        price: 16.99,
        picture: Panneau,
        url: "panneau",
        color: "Blanc",
        options: [
            { img: Panneau},  
        ],
    },
  ],
  productsColor: [
    {
        id: uuidv4(),
        name: "Tapis",
        price: 18.99,
        picture: Tapis,
        url: "tapis",
        options: [   
            { background: "blue", color: "Bleu", img: Tapis},
            { background: "green", color: "Vert", img: Tapis2},
            { background: "brown", color: "Brun", img: Tapis3},
            { background: "grey", color: "Gris", img: Tapis4},
        ],
    },
    {
        id: uuidv4(),
        name: "Sac à dos moumoute",
        price: 27.99,
        picture: Sac1,
        url: "moumoute",
        options: [
            { background: "black", color: "Noir", img: Sac1},
            { background: "blue", color: "Bleu", img: Sac2},
            { background: "brown", color: "Brun", img: Sac3},
            { background: "pink", color: "Rose", img: Sac4},
        ],
    },
    {
        id: uuidv4(),
        name: "Carnet de santé",
        price: 34.99,
        picture: Wallet,
        url: "carnet",
        options: [
            { background: "green", color: "vert", img: Wallet},
            { background: "pink", color: "rose", img: Wallet2},
        ],
    },
    {
        id: uuidv4(),
        name: "Doudou",
        price: 13.99,
        picture: Doudou,
        url: "doudou",
        options: [
            { background: "pink", color: "rose", img: Doudou},
            { background: "blue", color: "bleu", img: Doudou2},
            { background: "rgb(207, 207, 207)", color: "blanc", img: Doudou3},
        ],
    },
  ]
}