import {Pipe, PipeTransform} from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
    name: 'summary'

})
export class SummaryPipe implements PipeTransform{


    transform(value: string , limit?: number){
        if(!value)
            return null;
        let actualLimit =(limit)?limit :2;
        return value.substr(0,actualLimit)+'...';
    }
}