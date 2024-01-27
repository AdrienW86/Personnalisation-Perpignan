import Barboteuse from '@/assets/banner3.jpg'
import Welcome from '@/assets/welcome.jpg'
import Passport from '@/assets/passport.jpg'

import Coffret from '@/assets/coffret-islamique.jpg'
import Sommeil from '@/assets/sommeil.jpg'
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
        url: "passport"
    },
    {
        id: uuidv4(),
        name: "Coffret islamique",
        price: 38.99,
        picture: Coffret,
        url: "coffret"
    },
    {
        id: uuidv4(),
        name: "Sommeil velours",
        price: 34.99,
        picture: Sommeil,
        url: "sommeil"
    },
    {
        id: uuidv4(),
        name: "Ballon personnalisé",
        price: 38.99,
        picture: Welcome,
        url: "ballon"
    },
    {
        id: uuidv4(),
        name: "Set couverture",
        price: 34.99,
        picture: Couverture,
        url: "couverture"
    },
    {
        id: uuidv4(),
        name: "Bouquet 10 roses personnalisé",
        price: 54.99,
        picture: Rose,
        url: "roses"
    },
    {
        id: uuidv4(),
        name: "Sac en toile de jute",
        price: 15.99,
        picture: Toile,
        url: "sac"
    },
    {
        id: uuidv4(),
        name: "Barboteuse",
        price: 29.99,
        picture: Barboteuse,
        url: "barboteuse"
    },
    {
        id: uuidv4(),
        name: "Panneau acrylique",
        price: 16.99,
        picture: Panneau,
        url: "panneau"
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