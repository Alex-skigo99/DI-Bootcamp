export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  private _id: string;
  private _item: string;
  private _checked: boolean;

  constructor(id: string, item: string, checked: boolean = false) {
    this._id = id;
    this._item = item;
    this._checked = checked;
  }

  get id(): string {
    return this._id;
  }
  get item(): string {
    return this._item;
  }
  get checked(): boolean {
    return this._checked;
  }

  set id(val: string) {
    this._id = val;
  }
  set item(val: string) {
    this._item = val;
  }
  set checked(val: boolean) {
    this._checked = val;
  }
}
