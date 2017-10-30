import { Injectable } from '@angular/core';
import { New } from './news.model';
import { NEW_MOCK } from './news.mock';

@Injectable()
export class NewsServices {
    getNewsByLoop(k : number) : Promise<New []>{
        let newsByIndex : New[] = []; 
        for (var i = 0; i < k; i++) {
            newsByIndex[i] = this.setNewByIndex(NEW_MOCK, i);    
        }
        return Promise.resolve(newsByIndex);
    }

    setNewByIndex(newMock : New, i : number) : New {
        let n = newMock;
        n.id = i;
        n.author = newMock.author + i;
        n.category = newMock.category + i;
        n.chapo = newMock.chapo + i;
        n.content = newMock.content + i;
        return n;
    }
}