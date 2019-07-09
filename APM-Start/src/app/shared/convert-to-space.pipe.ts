import { Pipe, PipeTransform } from "@angular/core";

//custom pipe
@Pipe({
    name:'convertToSpace'
})

export class ConvertToSpacesPipe implements PipeTransform
{
    transform(value: string, param1:string) {
        return value.replace(param1, ' ');
    }
}