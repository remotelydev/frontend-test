import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems()
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => {
        this.items = function makeTree(data, root) {
          // Transform received data into a tree. I'm not sure if I should do this here.
          const tree = {};
          data.forEach(item => {
            Object.assign(tree[item.id] = tree[item.id] || {}, item);
            tree[item.parent_id] = tree[item.parent_id] || {};
            tree[item.parent_id].children = tree[item.parent_id].children || [];
            tree[item.parent_id].children.push(tree[item.id])
          });
          return tree[root].children;
        }(items, null)
      });
  }

}
