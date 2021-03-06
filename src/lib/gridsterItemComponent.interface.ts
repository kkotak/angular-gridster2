import {GridsterItem} from './gridsterItem.interface';
import {GridsterDraggable} from './gridsterDraggable.service';
import {Renderer2} from '@angular/core';
import {GridsterItemS} from './gridsterItemS.interface';
import {GridsterResizable} from './gridsterResizable.service';
import {GridsterComponentInterface} from './gridster.interface';

export abstract class GridsterItemComponentInterface {
  item: GridsterItem;
  $item: GridsterItemS;
  itemTop: number;
  itemLeft: number;
  itemWidth: number;
  itemHeight: number;
  top: number;
  left: number;
  width: number;
  height: number;
  itemMargin: number;
  drag: GridsterDraggable;
  resize: GridsterResizable;
  notPlaced: boolean;
  updateOptions: () => void;
  itemChanged: () => void;
  setSize: (noCheck: Boolean) => void;
  checkItemChanges: (newValue: GridsterItem, oldValue: GridsterItem) => void;
  canBeDragged: () => boolean;
  canBeResized: () => boolean;
  el: any;
  gridster: GridsterComponentInterface;
  renderer: Renderer2;
}
