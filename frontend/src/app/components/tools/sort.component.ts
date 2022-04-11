import { Pipe, PipeTransform } from "@angular/core";
import {ShortDataPackage} from "../../models/dataPackages/ShortDataPackage";

@Pipe({
  name: "sort"
})
export class ArraySortPipe implements PipeTransform{
  transform(array: Array<ShortDataPackage>, args: string): Array<ShortDataPackage> {
    array?
    array.sort((a: ShortDataPackage, b: ShortDataPackage) => {
      if (a.value.toLowerCase() < b.value.toLowerCase()) {
        return -1;
      } else if (a.value.toLowerCase() > b.value.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    }):array = [];
    return array;
  }
}
