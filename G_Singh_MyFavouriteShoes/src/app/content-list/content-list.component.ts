// content-list.component.ts

import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
onImageClick(_t2: any) {
throw new Error('Method not implemented.');
}
  contentArray: Content[] = [
    // Add more content items as needed
    {
      id: 1,
      title: 'Nike Air Max Plus',
      description: 'With their iconic visible Air cushioning, they provide unbeatable comfort and style. Whether you\'re hitting the streets or the gym, the Air Max will have you feeling like you\'re floating on air.',
      creator: 'Nike',
      imgURL: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0d6d72b1-5d4f-4350-8833-3d21fc8361b3/air-max-plus-shoes-2B74nW.png',
      type: 'Athletic',
      tags: ['Running', 'Sport']
    },
    {
      id: 2,
      title: 'Air Force 1',
      description: 'These kicks are a streetwear essential, known for their clean design and cushioned sole. They bring a fresh and stylish vibe to any outfit, making you stand out from the crowd.\n',
      creator: 'Nike',
      imgURL: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-shoes-rWtqPn.png',
      type: 'Casual',
      tags: ['Fashion', 'Comfort']
    },
    {
      id: 3,
      title: 'Air Jordan 1 Mid SE',
      description: ' The Air Jordan 1 Mid SE is the perfect blend of retro and modern. Inspired by the iconic Air Jordan 1, these sneakers feature premium materials, eye-catching colorways, and a sleek mid-top silhouette.',
      creator: 'Nike',
      imgURL: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/g9fhsj11zu3th0kvutdl/air-jordan-1-mid-se-shoes-gg517N.png',
      type: 'Running',
      tags: ['Athletic', 'Performance']
    },
    {
      id: 4,
      title: 'Samba OG',
      description: 'The adidas Samba OG is a classic sneaker thats been remastered for a new generation.',
      creator: 'Adidas Orignal',
      imgURL: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c8c7ca1919d84d48a9124caa7db48272_9366/Samba_OG_Shoes_White_IG5932_04_standard.jpg',
      type: 'Lifestyle',
      tags: ['Classic', 'Performance']
    },
    {
      id: 5,
      title: 'Palermo Sneaker',
      description: 'Palermo Sneakers are the perfect blend of style and comfort. Theyre trendy, versatile, and great for any casual outfit',
      creator: 'Puma',
      imgURL: 'https://images.littleburgundyshoes.com/images/products/1_217929_ZM.jpg',
      type: 'Lifestyle',
      tags: ['Classic', 'Lifestyle']
    },
    {
      id: 6,
      title: 'Suede Classic XXI',
      description: 'he Suede Classic XXI Sneaker is a timeless and iconic shoe that never goes out of style. With its suede upper and classic design, it adds a touch of sophistication to any outfit. ',
      creator: 'Puma',
      imgURL: 'https://www.sportinglife.ca/dw/image/v2/BCLQ_PRD/on/demandware.static/-/Sites-spl-master/default/dw64d2bb04/images/default/25727041_ONE_COLOUR_3_5.JPG?sw=540',
      type: 'Lifestyle',
      tags: ['Classic', 'Lifestyle']
    }
  ];
}
