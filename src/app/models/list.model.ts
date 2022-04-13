import { ListItem } from "./list-item.model";

export class ListTODO {

    id: number;
    title: string;
    created: Date;
    finish: Date;
    complete: boolean;
    items: ListItem [];

    constructor ( title: string ) {
        this.id = new Date().getTime();
        this.title = title;
        this.created = new Date ();
        this.complete = false;
        this.items = [];
    }
}