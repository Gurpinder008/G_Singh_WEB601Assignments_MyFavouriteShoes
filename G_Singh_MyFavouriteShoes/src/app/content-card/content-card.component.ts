import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor() {

    const contentItem1: Content = {
      id: 1,
      title: 'Nike Air Max Plus',
      description: 'With their iconic visible Air cushioning, they provide unbeatable comfort and style. Whether you\'re hitting the streets or the gym, the Air Max will have you feeling like you\'re floating on air.',
      creator: 'Nike',
      imgURL: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0d6d72b1-5d4f-4350-8833-3d21fc8361b3/air-max-plus-shoes-2B74nW.png',
      type: 'Athletic',
      tags: ['Running', 'Sport']
    };

    const contentItem2: Content = {
      id: 2,
      title: 'Air Force 1',
      description: 'These kicks are a streetwear essential, known for their clean design and cushioned sole. They bring a fresh and stylish vibe to any outfit, making you stand out from the crowd.\n',
      creator: 'Nike',
      imgURL: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-shoes-rWtqPn.png',
      type: 'Casual',
      tags: ['Fashion', 'Comfort']
    };

    const contentItem3: Content = {
      id: 3,
      title: 'Air Jordan 1 Mid SE',
      description: ' The Air Jordan 1 Mid SE is the perfect blend of retro and modern. Inspired by the iconic Air Jordan 1, these sneakers feature premium materials, eye-catching colorways, and a sleek mid-top silhouette.',
      creator: 'Nike',
      imgURL: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/g9fhsj11zu3th0kvutdl/air-jordan-1-mid-se-shoes-gg517N.png',
      type: 'Running',
      tags: ['Athletic', 'Performance']
    };


    this.contentList.addContent(contentItem1);
    this.contentList.addContent(contentItem2);
    this.contentList.addContent(contentItem3);
  }

}
