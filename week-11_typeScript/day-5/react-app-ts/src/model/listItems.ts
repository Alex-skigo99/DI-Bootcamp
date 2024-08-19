export interface ItemType {
    id: string,
    text: string,
    active: boolean,
};

// export default class Item implements ItemType {
//     private _id: string;
//     private _text: string;
//     private _active: boolean;
//     constructor(id: typeof this._id, text: typeof this._text, active: typeof this._active = true) {
//         this._id = id;
//         this._text = text;
//         this._active = active;
//     };
    
//     public get id() : typeof this._id {return this._id};
//     public get text() : typeof this._text {return this._text};
//     public get active() : typeof this._active {return this._active};
    
//     public set id(v : typeof this._id) {this._id = v};
//     public set text(v : typeof this._text) {this._text = v};
//     public set active(v : typeof this._active) {this._active = v};
// };
