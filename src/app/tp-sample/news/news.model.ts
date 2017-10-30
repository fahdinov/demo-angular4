export class New {
    id: number;
    title: string;
    category: string;
    media : string; // TODO
    chapo : string;
    content : string;
    datePub : Date;
    tags : string[];
    author : string;
    /*
    setNewByIndex(i : number) : New {
        let n = new New();
        n.id = i;
        n.author = n.author + i;
        n.category = n.category + i;
        n.chapo = n.chapo + i;
        n.content = n.content + i;
        return n;
    }
    */
  }