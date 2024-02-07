import monstera from '../assets/monstera.jpg';
import ficus from '../assets/ficus-lyrata.webp';
import photos from '../assets/photos.avif'
import yucca from '../assets/yucca.avif';
import olivier from '../assets/olivier.webp';
import geranium from '../assets/Geranium.webp';
import basilique from '../assets/basilic.jpg';
import aloe from '../assets/aloe.avif';
import succulente from '../assets/succulente.avif';

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        isBestSale : true,
        isSpecialOffer:true,
        light:2,
		water:2 ,
		cover: monstera,
		price :185
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        isBestSale : true,
        isSpecialOffer:true,
        light:1,
		water:2 ,
		cover: ficus,
		price :10
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        isBestSale: false,
        isSpecialOffer:false,
        light:2,
		water : 3,
		cover : photos,
		price :17
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
        isBestSale:false,
        isSpecialOffer:true,
		light:22 ,
		cover: yucca,
		water : 2,
		price:12
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        isBestSale:true,
		light:3,
		water:2,
		cover : olivier,
		price :24
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
        isBestSale:true,
        light:1,
		water:1,
		cover : geranium,
		price :18
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        isBestSale:false,
        isSpecialOffer:false,
        light:1,
		water:2 ,
		cover: basilique,
		price :10
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
        isBestSale:true,
        isSpecialOffer:false,
        light:3,
		water:2 ,
		cover: aloe,
		price :11
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        isBestSale:false,
        isSpecialOffer:true,
        light:2,
		water:2 ,
		cover: succulente,
		price :13
	}
]