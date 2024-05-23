import { Step1ModelSettings } from "./Step1ModelSettings";
import { Step1Color } from "./Step1Color";
import { Step2Config } from "./Step2Config";

export class SelectedTeslaCar{
    
    model?:Step1ModelSettings = undefined;
    color?:Step1Color= undefined;
    config?: Step2Config= undefined;
    tow: boolean =false;
    yoke: boolean =false;

    isSelectedModelAndColor(): boolean
    {
        if(this.model && this.color){
            return false;
        }
        return true;
    }

    isSelectedConfiguration():boolean
    {
        if(this.config){
            return false;
        }
        return true;
    }

    calculateFinalPrice():number
    {
        var towYokeCost=1000;
        var sum=(this.color?.price ?? 0)+(this.config?.price ?? 0);
        if(this.tow) sum+=towYokeCost;
        if(this.yoke) sum+= towYokeCost;
        return sum;
    }
}